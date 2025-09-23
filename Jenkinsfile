pipeline {
    agent any

    environment {
        DEPLOY_PATH   = '/var/www/html/lqy-frontend/apps'
        MAX_BACKUPS   = 3
        SLACK_CHANNEL = '#lqy'
        GIT_BRANCH    = 'main'  
    }

    triggers {
        githubPush()  
    }

    options {
        skipDefaultCheckout()
    }

    stages {
         stage('Notify Start') {
            steps {
                script {
                    slackSend(
                        channel: env.SLACK_CHANNEL,
                        message: "▶️ Job *${env.JOB_NAME}* #${env.BUILD_NUMBER} triggered by ${currentBuild.getBuildCauses()[0].userId ?: 'GitHub Push'}"
                    )
                }
            }
        }
        
        stage('Checkout') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'LQY_KEY', keyFileVariable: 'SSH_KEY')]) {
                    script {
                        if (fileExists('.git')) {
                            echo "🔄 Repository already exists, pulling latest changes..."
                            sh """
                                GIT_SSH_COMMAND="ssh -i \$SSH_KEY -o StrictHostKeyChecking=no" git fetch origin ${env.GIT_BRANCH}
                                GIT_SSH_COMMAND="ssh -i \$SSH_KEY -o StrictHostKeyChecking=no" git reset --hard origin/${env.GIT_BRANCH}
                            """
                        } else {
                            echo "🔄 Cloning repository..."
                            sh """
                                GIT_SSH_COMMAND="ssh -i \$SSH_KEY -o StrictHostKeyChecking=no" git clone -b ${env.GIT_BRANCH} git@github.com:EAD-INTERRA/lqy-frontend.git .
                            """
                        }
                    }
                }

                script {
                    env.BRANCH_NAME = sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
                    echo "✅ Checked out branch: ${env.BRANCH_NAME}"
                }
            }
        }

       
        stage('Install Dependencies') {
            steps {
                sh '''
                rm -rf node_modules package-lock.json pnpm-lock.yaml
                echo "📦 Installing project dependencies..."
                pnpm install || { echo "❌ Failed to install dependencies"; exit 1; }
                '''
            }
        }

              stage('Build & Generate') {
            steps {
                script {
                    def folders = sh(
                        script: "ls -d apps/*/ | xargs -n 1 basename | grep -v '@tmp'",
                        returnStdout: true
                    ).trim().split("\n")

                    def buildStatus = [:]

                    folders.each { folder ->
                        dir("apps/${folder}") {
                            try {
                                sh """
                                echo "⚙️ Building ${folder}..."
                                # Only inject .env for the auth app
                                if [ "${folder}" = "auth" ]; then
    echo "🔑 Injecting .env for auth app..."
    cat > .env <<'EOF'
NUXT_PUBLIC_ADMIN= https://lqy-admin.interranetworks.com/
NUXT_PUBLIC_BROKER= https://lqy-broker.interranetworks.com/
NUXT_PUBLIC_CSCS= https://lqy-cscs.interranetworks.com/
NUXT_PUBLIC_FINANCIAL_INSTITUTIONS= https://lqy-fi.interranetworks.com/
NUXT_PUBLIC_INVESTOR= https://lqy-investor.interranetworks.com/
NUXT_PUBLIC_CUSTODIAN= https://lqy-custodian.interranetworks.com

EOF
fi

                                pnpm run build || { echo "❌ Build failed"; exit 1; }
                                pnpm run generate || { echo "❌ Generate failed"; exit 1; }
                                """
                                buildStatus[folder] = "success"
                            } catch (err) {
                           
                                 // Extract only error lines (ignore warnings)
                                def logExcerpt = sh(
                                    script: "grep -i '\\[error\\]' build.log | tail -n 50 || true",
                                    returnStdout: true
                                ).trim()

                                errorMessages[folder] = logExcerpt ?: "❌ Build failed but no explicit [error] lines found. Check full log."
                            }
                        }
                    }

                    // Slack summary
                    def attachments = folders.collect { app ->
                        def color = buildStatus[app] == "success" ? "good" : "danger"
                        def emoji = buildStatus[app] == "success" ? "✅" : "❌"
                        def msg = buildStatus[app] == "success"
                            ? "Build & Generate succeeded"
                            : "Error:\n```" + errorMessages[app] + "```"

                        [
                            color: color,
                            title: "${emoji} ${app}",
                            text: msg
                        ]
                    }

                    slackSend(
                        channel: env.SLACK_CHANNEL,
                        message: "🛠 Build & Generate summary for *${env.JOB_NAME}* #${env.BUILD_NUMBER}",
                        attachments: attachments
                    )

                    env.SUCCESSFUL_APPS = folders.findAll { buildStatus[it] == "success" }.join(" ")
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    slackSend(
                        channel: env.SLACK_CHANNEL,
                        message: "🚀 Deployment started for successful apps: ${env.SUCCESSFUL_APPS}"
                    )

                    sh """
                    echo "🚀 Deploying build artifacts to \$DEPLOY_PATH..."

                    TIMESTAMP=\$(date +"%Y-%m-%d_%H-%M-%S")

                    for app in \$SUCCESSFUL_APPS; do
                        echo "📂 Deploying \$app..."

                        if [ -d "\$DEPLOY_PATH/\$app/dist" ]; then
                            echo "📦 Backing up existing dist for \$app..."
                            sudo mv "\$DEPLOY_PATH/\$app/dist" "\$DEPLOY_PATH/\$app/dist_backup_\${TIMESTAMP}"
                        fi

                        sudo cp -r "\$WORKSPACE/apps/\$app/dist" "\$DEPLOY_PATH/\$app/"

                        backups=( \$(ls -dt "\$DEPLOY_PATH/\$app/dist_backup_"* 2>/dev/null || true) )
                        if [ \${#backups[@]} -gt \$MAX_BACKUPS ]; then
                            for old in "\${backups[@]:\$MAX_BACKUPS}"; do
                                echo "🧹 Removing old backup \$old for \$app"
                                sudo rm -rf "\$old"
                            done
                        fi
                    done
                    echo "✅ Deployment finished to \$DEPLOY_PATH"
                    """
                }
            }
        }

        stage('Rollback (if needed)') {
            when { expression { currentBuild.currentResult == 'FAILURE' } }
            steps {
                sh """
                echo "⏪ Rolling back to previous version..."
                for app in \$(ls -d \$DEPLOY_PATH/*/ | xargs -n 1 basename)
                do
                    latest_backup=\$(ls -dt \$DEPLOY_PATH/\$app/dist_backup_* 2>/dev/null | head -n 1)
                    if [ -n "\$latest_backup" ]; then
                        echo "🔄 Restoring \$latest_backup for \$app..."
                        sudo rm -rf \$DEPLOY_PATH/\$app/dist
                        sudo mv "\$latest_backup" \$DEPLOY_PATH/\$app/dist
                    else
                        echo "⚠️ No backup found for \$app, skipping rollback..."
                    fi
                done
                echo "✅ Rollback completed."
                """
            }
        }
    }

    post {
        success {
            slackSend(
                channel: env.SLACK_CHANNEL,
                message: "✅ Build & deployment for *${env.JOB_NAME}* #${env.BUILD_NUMBER} completed successfully!"
            )
        }
        failure {
            slackSend(
                channel: env.SLACK_CHANNEL,
                message: "❌ Build or deployment for *${env.JOB_NAME}* #${env.BUILD_NUMBER} failed. Rollback executed if backups were available."
            )
        }
    }
}