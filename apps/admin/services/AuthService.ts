import type { AxiosInstance } from "axios";

import { useAuthStore } from 'stores/authStore';
import { createPinia } from 'pinia';

const RETRY_INTERVAL = 1000; // Retry interval in milliseconds
const MAX_RETRY_COUNT = 10; // Maximum number of retry attempts

const pinia = createPinia();
pinia.use(useAuthStore);
const authStore = useAuthStore(pinia);
let token = "";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const retryAuthStoreBearerToken = async (): Promise<string> => {
    const isLoggedIn = authStore.isLoggedIn;
    const isAuthenticated = authStore.isAuthenticated;
    
    let retryCount = 0;
    // let token = '';

    if (process.client) {
        while (!token && retryCount < MAX_RETRY_COUNT) {
            token = await authStore.BearerToken();
            if (!token) {
                console.log(`Retrying to fetch token... Retry count: ${retryCount + 1}`);
                await delay(RETRY_INTERVAL);
                retryCount++;
            } else {
                console.log("Token retrieval successful. Stopping retries.");
                break; // Break out of the retry loop if token retrieval is successful
            }
        }
    } else {
        console.log("Skipping token retrieval as the code is running on the server-side.");
    }

    if (!token) {
        console.error("Failed to retrieve token after maximum retry attempts.");
    }

    return token;
};


(async () => {
    
    {
        token = await retryAuthStoreBearerToken();
        console.log("SER", token);
    }
})();


export interface Auth {
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
  }

interface GetAuthsResponse {
    body: Auth[];
    message: string;
    code: number;
}

export interface Auth {
    code: string;
    name: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    archived: boolean
  }

interface GetAuthResponse{
    body: Auth[];
    message: string;
    code: number;
}

interface GetAuthInput{
    id: string
}

interface ApproveAuthResponse{
    body: string;
    message: string;
    code: number;
}

interface ApproveAuthInput{
    status: boolean
}

export interface AuthServiceInterface {
    getProfile(): Promise<GetAuthsResponse>;
    getAuthById(AuthId: number): Promise<GetAuthResponse>;
    approveAuth(AuthId: number, input: ApproveAuthInput): Promise<ApproveAuthResponse>
}

export class AuthService implements AuthServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }



    async getProfile(): Promise<GetAuthsResponse> {
        try {
            const response = await this.client.get('get_profile', { headers: { authorization: "Bearer " + token } }) 
            console.log(response)
            return response.data   
        } catch (error) {
            throw error 
        }
    }
    
    async getAuthById(AuthId: number): Promise<GetAuthResponse> {
        try {
            const response = await this.client.get(`stakeholder/${AuthId}`, { headers: { authorization: "Bearer " + token } }) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }

    async approveAuth(AuthId: number, input: ApproveAuthInput): Promise<ApproveAuthResponse> {
        try {
            const response = await this.client.put(`stakeholder/${AuthId}/status`, input, {
                 headers: { authorization: "Bearer " + token }
             });
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}



