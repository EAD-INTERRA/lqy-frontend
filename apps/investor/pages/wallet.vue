<template>
  <div class="p-8 flex flex-col space-y-6 gap-8 font-ox">
    <!-- Inline Alert Message Banner (replaces toast) -->
    <Transition name="alert-slide">
      <div
        v-if="alertMessage"
        :class="[
          'fixed top-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-3.5 rounded-2xl shadow-xl font-semibold text-sm flex items-center gap-3 min-w-[320px] max-w-[500px] border backdrop-blur-md',
          alertType === 'success'
            ? 'bg-green-50/95 text-green-800 border-green-200'
            : '',
          alertType === 'error'
            ? 'bg-red-50/95 text-red-800 border-red-200'
            : '',
          alertType === 'info'
            ? 'bg-blue-50/95 text-blue-800 border-blue-200'
            : '',
          alertType === 'warning'
            ? 'bg-amber-50/95 text-amber-800 border-amber-200'
            : '',
        ]"
      >
        <!-- Icon -->
        <svg
          v-if="alertType === 'success'"
          class="w-5 h-5 flex-shrink-0 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <svg
          v-else-if="alertType === 'error'"
          class="w-5 h-5 flex-shrink-0 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <svg
          v-else-if="alertType === 'warning'"
          class="w-5 h-5 flex-shrink-0 text-amber-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          ></path>
        </svg>
        <svg
          v-else
          class="w-5 h-5 flex-shrink-0 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span class="flex-1">{{ alertMessage }}</span>
        <button
          @click="alertMessage = ''"
          class="ml-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </Transition>
    <!-- Header Section -->
    <section class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 mb-2 font-sen">
          Investor Wallet
        </h1>
        <p class="text-gray-600 text-ox-sm">
          Manage your funds, execute withdrawals, and repay loans seamlessly.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <span
          class="text-sm bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-semibold border border-blue-100 flex items-center gap-1.5"
        >
          <span
            class="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"
          ></span>
          Connected to Wallet Provider
        </span>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Wallet Balance Card -->
      <div
        class="relative overflow-hidden bg-gradient-to-br from-[#10356D] to-[#1E87F0] text-white shadow-xl rounded-[16px] p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div
          class="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-white opacity-5 blur-2xl"
        ></div>
        <div
          class="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"
        ></div>

        <div class="flex justify-between items-start mb-6">
          <div>
            <p
              class="text-white/70 text-ox-xs font-semibold uppercase tracking-wider"
            >
              Available Balance
            </p>
            <h2 class="text-3xl font-bold mt-1 font-sen tracking-tight">
              {{ formatCurrency(walletBalance) }}
            </h2>
          </div>
          <span class="bg-white/15 backdrop-blur-md rounded-full p-2.5">
            <svg
              class="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              ></path>
            </svg>
          </span>
        </div>

        <div class="flex gap-3 mt-8">
          <button
            @click="initiateWithdrawal"
            class="flex-1 bg-white hover:bg-gray-50 text-[#10356D] font-bold py-3 px-4 rounded-xl shadow-md transition-colors flex justify-center items-center gap-2 text-ox-sm hover:scale-[1.02] transform transition-transform"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Withdraw Funds
          </button>
          <button
            @click="openLoanModal"
            class="flex-1 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold py-3 px-4 rounded-xl transition-all flex justify-center items-center gap-2 text-ox-sm hover:scale-[1.02] transform transition-transform"
          >
            ₦ Repay Loan
          </button>
        </div>
      </div>

      <!-- Outstanding Loan Card -->
      <div
        class="relative overflow-hidden bg-white shadow-md border border-gray-100 rounded-[16px] p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <div class="flex justify-between items-start mb-4">
            <div>
              <p
                class="text-gray-500 text-ox-xs font-semibold uppercase tracking-wider"
              >
                Outstanding Loan Balance
              </p>
              <h2
                class="text-3xl font-bold text-gray-900 mt-1 font-sen tracking-tight"
              >
                {{ formatCurrency(loanOutstanding) }}
              </h2>
            </div>
            <span class="bg-red-50 rounded-full p-2.5 text-red-500">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </span>
          </div>
          <div class="mt-2 space-y-1.5">
            <div class="flex justify-between text-ox-xs text-gray-600">
              <span>Next Repayment Due:</span>
              <span class="font-bold text-[#10356D]">{{
                formatCurrency(loanRepaymentDue)
              }}</span>
            </div>
            <div class="flex justify-between text-ox-xs text-gray-600">
              <span>Repayment Period:</span>
              <span>Monthly (15th)</span>
            </div>
          </div>
        </div>
        <div
          class="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-ox-xs"
        >
          <span class="text-gray-500">Repayment Status</span>
          <span
            :class="
              loanOutstanding > 0
                ? 'bg-amber-100 text-amber-800'
                : 'bg-green-100 text-green-800'
            "
            class="px-2.5 py-1 rounded-full font-bold"
          >
            {{ loanOutstanding > 0 ? "Active Loan" : "Settled" }}
          </span>
        </div>
      </div>

      <!-- Quick Statistics Card -->
      <div
        class="relative overflow-hidden bg-white shadow-md border border-gray-100 rounded-[16px] p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <p
            class="text-gray-500 text-ox-xs font-semibold uppercase tracking-wider mb-4"
          >
            Wallet Activity Summary
          </p>
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span class="text-ox-xs text-gray-600 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-green-500"></span> Total
                Inflows
              </span>
              <span class="font-bold text-gray-800 text-ox-sm">{{
                formatCurrency(totalInflows)
              }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-ox-xs text-gray-600 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-red-500"></span> Total
                Outflows
              </span>
              <span class="font-bold text-gray-800 text-ox-sm">{{
                formatCurrency(totalOutflows)
              }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-ox-xs text-gray-600 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-purple-500"></span> Total
                Repayments
              </span>
              <span class="font-bold text-gray-800 text-ox-sm">{{
                formatCurrency(totalRepaymentsSum)
              }}</span>
            </div>
          </div>
        </div>
        <div
          class="mt-4 pt-4 border-t border-gray-100 text-ox-xs text-center text-gray-400"
        >
          Last updated: Just now
        </div>
      </div>
    </section>

    <!-- History & Tabs Section -->
    <section
      class="bg-white shadow-md border border-gray-100 rounded-[16px] p-6"
    >
      <div
        class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6"
      >
        <div>
          <h3 class="text-xl font-bold text-gray-900 font-sen">
            Transaction History
          </h3>
          <p class="text-gray-500 text-ox-xs mt-1">
            Review all credit/debit transactions and repayments.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <!-- Search Box -->
          <div class="relative w-64">
            <span
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search references, banks..."
              class="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-ox-xs"
            />
          </div>
        </div>
      </div>

      <!-- Custom Tabs -->
      <div class="flex border-b border-gray-100 mb-6 overflow-x-auto">
        <button
          v-for="tab in tabs"
          :key="tab.value"
          @click="activeTab = tab.value"
          :class="
            activeTab === tab.value
              ? 'border-[#1E87F0] text-[#1E87F0] font-bold'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
          "
          class="py-3 px-5 border-b-2 text-ox-xs font-semibold whitespace-nowrap transition-colors"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Transactions List Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr
              class="border-b border-gray-100 text-gray-400 text-ox-xs uppercase font-semibold"
            >
              <th class="pb-3 pt-2">Transaction ID</th>
              <th class="pb-3 pt-2">Type</th>
              <th class="pb-3 pt-2">Amount</th>
              <th class="pb-3 pt-2">Details</th>
              <th class="pb-3 pt-2">Date & Time</th>
              <th class="pb-3 pt-2 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="tx in filteredTransactions"
              :key="tx.id"
              class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors text-ox-sm text-gray-800"
            >
              <td class="py-4 font-mono text-ox-xs font-bold text-gray-900">
                {{ tx.id }}
              </td>
              <td class="py-4">
                <span
                  :class="getTypeBadgeClass(tx.type)"
                  class="px-2.5 py-1 rounded-full text-ox-xs font-bold"
                >
                  {{ tx.type }}
                </span>
              </td>
              <td
                class="py-4 font-bold"
                :class="
                  tx.type === 'Credit' ? 'text-green-600' : 'text-gray-900'
                "
              >
                {{ tx.type === "Credit" ? "+" : "-"
                }}{{ formatCurrency(tx.amount) }}
              </td>
              <td class="py-4">
                <div class="font-medium text-gray-900">{{ tx.details }}</div>
                <div
                  v-if="tx.recipient"
                  class="text-ox-xs text-gray-400 font-normal"
                >
                  Acc: {{ tx.recipient.account }} | {{ tx.recipient.bank }}
                </div>
              </td>
              <td class="py-4 text-ox-xs text-gray-500">{{ tx.date }}</td>
              <td class="py-4 text-right">
                <button
                  @click="viewReceipt(tx)"
                  class="text-[#1E87F0] hover:text-[#10356D] font-bold text-ox-xs hover:underline flex items-center gap-1 justify-end ml-auto"
                >
                  <svg
                    class="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Receipt
                </button>
              </td>
            </tr>
            <tr v-if="filteredTransactions.length === 0">
              <td colspan="6" class="text-center py-8 text-gray-400 text-ox-xs">
                No transactions found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ==================== MODALS ==================== -->

    <!-- PIN Setup Modal -->
    <div
      v-if="showPinSetupModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-[20px] shadow-2xl w-full max-w-md p-6 relative animate-fade-in border border-gray-100"
      >
        <button
          @click="showPinSetupModal = false"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="text-center space-y-3 mb-6">
          <div
            class="bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 font-sen">
            Set Transaction PIN
          </h3>
          <p class="text-gray-500 text-ox-xs">
            Setup a secure 4-digit PIN to authorize withdrawals and loan
            repayments.
          </p>
        </div>

        <form @submit.prevent="savePin" class="space-y-4">
          <div>
            <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
              >Enter 4-Digit PIN</label
            >
            <div class="relative">
              <input
                v-model="newPin"
                :type="showNewPin ? 'text' : 'password'"
                pattern="[0-9]{4}"
                inputmode="numeric"
                maxlength="4"
                required
                class="w-full text-center tracking-[1em] text-xl font-bold border border-gray-200 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                placeholder="••••"
              />
              <button
                type="button"
                @click="showNewPin = !showNewPin"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg
                  v-if="!showNewPin"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
              >Confirm 4-Digit PIN</label
            >
            <div class="relative">
              <input
                v-model="confirmPin"
                :type="showConfirmPin ? 'text' : 'password'"
                pattern="[0-9]{4}"
                inputmode="numeric"
                maxlength="4"
                required
                class="w-full text-center tracking-[1em] text-xl font-bold border border-gray-200 rounded-xl px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                placeholder="••••"
              />
              <button
                type="button"
                @click="showConfirmPin = !showConfirmPin"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg
                  v-if="!showConfirmPin"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            class="w-full mt-6 bg-[#1E87F0] hover:bg-[#10356D] text-white font-bold py-3 rounded-xl transition-colors shadow-md"
          >
            Create PIN
          </button>
        </form>
      </div>
    </div>

    <!-- Withdrawal Modal -->
    <div
      v-if="showWithdrawalModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-[20px] shadow-2xl w-full max-w-md p-6 relative border border-gray-100"
      >
        <button
          @click="showWithdrawalModal = false"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="text-center space-y-3 mb-6">
          <h3 class="text-xl font-bold text-gray-900 font-sen">
            Withdraw Funds
          </h3>
          <p class="text-gray-500 text-ox-xs">
            Transfer money from your wallet to a verified bank account.
          </p>
        </div>

        <form @submit.prevent="executeWithdrawal" class="space-y-4">
          <!-- Account Number -->
          <div>
            <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
              >Recipient Account Number (10 digits)</label
            >
            <div class="relative">
              <input
                v-model="withdrawalForm.accountNumber"
                type="text"
                pattern="[0-9]{10}"
                inputmode="numeric"
                maxlength="10"
                required
                @input="handleAccountNumberInput"
                class="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-ox-sm"
                placeholder="e.g. 0123456789"
              />
              <span
                v-if="isVerifyingAccount"
                class="absolute right-3 top-3 flex h-4 w-4"
              >
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-4 w-4 bg-blue-500"
                ></span>
              </span>
            </div>
          </div>

          <!-- Verified Bank and Name Display -->
          <div
            v-if="withdrawalForm.accountNumber.length === 10"
            class="transition-all"
          >
            <div
              v-if="isVerifyingAccount"
              class="bg-gray-50 border border-gray-150 rounded-xl p-3 text-ox-xs text-gray-500 animate-pulse"
            >
              Verifying recipient details...
            </div>
            <div
              v-else
              class="bg-green-50 border border-green-100 rounded-xl p-3.5 text-ox-xs space-y-1"
            >
              <div class="flex justify-between">
                <span class="text-green-700 font-semibold">Bank Name:</span>
                <span class="text-gray-700 font-bold">{{
                  withdrawalForm.bankName
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-green-700 font-semibold">Account Name:</span>
                <span class="text-gray-700 font-bold">{{
                  withdrawalForm.accountName
                }}</span>
              </div>
            </div>
          </div>

          <!-- Amount -->
          <div>
            <div
              class="flex justify-between text-ox-xs text-gray-700 mb-1.5 font-semibold"
            >
              <label>Amount to Withdraw (₦)</label>
              <span class="text-gray-400"
                >Bal: {{ formatCurrency(walletBalance) }}</span
              >
            </div>
            <input
              v-model.number="withdrawalForm.amount"
              type="number"
              :max="walletBalance"
              min="100"
              required
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-ox-sm"
              placeholder="e.g. 50000"
            />
          </div>

          <!-- Description / Narration 
          <div>
            <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
              >Description / Narration</label
            >
            <textarea
              v-model="withdrawalForm.description"
              rows="2"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-ox-sm resize-none"
              placeholder="e.g. Payment for services, Personal transfer..."
            ></textarea>
          </div>
          -->
          <!-- Transaction PIN -->
          <div>
            <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
              >Enter Transaction PIN</label
            >
            <div class="relative">
              <input
                v-model="withdrawalForm.pin"
                :type="showWithdrawalPin ? 'text' : 'password'"
                pattern="[0-9]{4}"
                inputmode="numeric"
                maxlength="4"
                required
                class="w-full text-center tracking-[1em] text-lg font-bold border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                placeholder="••••"
              />
              <button
                type="button"
                @click="showWithdrawalPin = !showWithdrawalPin"
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <svg
                  v-if="!showWithdrawalPin"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg
                  v-else
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <button
            type="submit"
            :disabled="
              isVerifyingAccount || withdrawalForm.accountNumber.length !== 10
            "
            class="w-full mt-6 bg-[#1E87F0] hover:bg-[#10356D] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2"
          >
            Confirm & Withdraw
          </button>
        </form>
      </div>
    </div>

    <!-- Loan Repayment Modal -->
    <div
      v-if="showLoanRepaymentModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-[20px] shadow-2xl w-full max-w-lg p-6 relative border border-gray-100 max-h-[90vh] overflow-y-auto"
      >
        <button
          @click="showLoanRepaymentModal = false"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="text-center space-y-2 mb-6">
          <h3 class="text-xl font-bold text-gray-900 font-sen">Repay Loan</h3>
          <p class="text-gray-500 text-ox-xs">
            Pay back outstanding debt to clear your account status.
          </p>
        </div>

        <div class="space-y-4">
          <!-- Outstanding and Due Info -->
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <span class="text-ox-xs text-gray-500">Outstanding Balance</span>
              <p class="text-xl font-bold text-[#10356D] mt-1">
                {{ formatCurrency(loanOutstanding) }}
              </p>
            </div>
            <div class="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <span class="text-ox-xs text-gray-500">Minimum Amount Due</span>
              <p class="text-xl font-bold text-[#10356D] mt-1">
                {{ formatCurrency(loanRepaymentDue) }}
              </p>
            </div>
          </div>

          <!-- Schedule list -->
          <div class="border border-gray-100 rounded-xl p-4 space-y-3">
            <h4 class="text-ox-xs font-bold text-gray-700">
              Installment Schedule
            </h4>
            <div class="space-y-2 max-h-32 overflow-y-auto">
              <div
                v-for="(sch, idx) in loanSchedule"
                :key="idx"
                class="flex justify-between items-center text-ox-xs py-1.5 border-b border-gray-50 last:border-0"
              >
                <span class="text-gray-600 font-medium"
                  >Installment {{ idx + 1 }} ({{ sch.date }})</span
                >
                <div class="flex items-center gap-2">
                  <span class="font-bold text-gray-800">{{ sch.amount }}</span>
                  <span
                    :class="
                      sch.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    "
                    class="px-2 py-0.5 rounded text-[10px] font-bold"
                  >
                    {{ sch.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form @submit.prevent="executeLoanRepayment" class="space-y-4 pt-2">
            <!-- Amount Input -->
            <div>
              <div
                class="flex justify-between text-ox-xs text-gray-700 mb-1.5 font-semibold"
              >
                <label>Repayment Amount (₦)</label>
                <span class="text-gray-400"
                  >Bal: {{ formatCurrency(walletBalance) }}</span
                >
              </div>
              <input
                v-model.number="repaymentForm.amount"
                type="number"
                :max="Math.min(walletBalance, loanOutstanding)"
                min="1000"
                required
                class="w-full border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-ox-sm"
                placeholder="Enter repayment amount"
              />
            </div>

            <!-- PIN Input -->
            <div>
              <label class="block text-ox-xs font-semibold text-gray-700 mb-1.5"
                >Enter Transaction PIN</label
              >
              <div class="relative">
                <input
                  v-model="repaymentForm.pin"
                  :type="showRepaymentPin ? 'text' : 'password'"
                  pattern="[0-9]{4}"
                  inputmode="numeric"
                  maxlength="4"
                  required
                  class="w-full text-center tracking-[1em] text-lg font-bold border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                  placeholder="••••"
                />
                <button
                  type="button"
                  @click="showRepaymentPin = !showRepaymentPin"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  <svg
                    v-if="!showRepaymentPin"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  <svg
                    v-else
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              class="w-full mt-6 bg-[#10356D] hover:bg-[#1E87F0] text-white font-bold py-3 rounded-xl transition-colors shadow-md"
            >
              Authorize Repayment
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Receipt / Transaction Details Modal -->
    <div
      v-if="showReceiptModal"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div
        class="bg-white rounded-[24px] shadow-2xl w-full max-w-md p-6 relative border border-gray-100 print:p-0 print:border-0"
      >
        <!-- Close Button (hidden in print) -->
        <button
          @click="showReceiptModal = false"
          class="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors print:hidden"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Receipt Wrapper to target printing -->
        <div id="receipt-content" class="space-y-6">
          <div class="text-center pb-4 border-b border-dashed border-gray-150">
            <h4
              class="text-sm font-semibold tracking-wide text-gray-400 uppercase font-sen"
            >
              Transaction Receipt
            </h4>
            <div
              class="mt-4 inline-flex items-center justify-center p-3 rounded-full bg-green-50 text-green-500 mb-2"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <p class="text-xl font-bold text-gray-900 mt-1 font-sen">
              {{ formatCurrency(selectedTx.amount) }}
            </p>
            <span
              class="inline-block bg-green-100 text-green-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full mt-1.5"
            >
              {{ selectedTx.status }}
            </span>
          </div>

          <div class="space-y-3.5 text-ox-xs">
            <div class="flex justify-between">
              <span class="text-gray-400">Transaction ID</span>
              <span class="font-bold text-gray-900 font-mono">{{
                selectedTx.id
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Reference</span>
              <span class="font-bold text-gray-900">{{
                selectedTx.reference
              }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Transaction Type</span>
              <span class="font-bold text-gray-900">{{ selectedTx.type }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Date & Time</span>
              <span class="font-bold text-gray-900">{{ selectedTx.date }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Description</span>
              <span class="font-bold text-gray-900">{{
                selectedTx.details
              }}</span>
            </div>
            <!-- Dynamic Withdrawal Details -->
            <div
              v-if="selectedTx.recipient"
              class="border-t border-gray-50 pt-3 space-y-2"
            >
              <div class="flex justify-between">
                <span class="text-gray-400">Recipient Bank</span>
                <span class="font-bold text-gray-900">{{
                  selectedTx.recipient.bank
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Account Number</span>
                <span class="font-bold text-gray-900">{{
                  selectedTx.recipient.account
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-400">Account Name</span>
                <span class="font-bold text-gray-900">{{
                  selectedTx.recipient.name
                }}</span>
              </div>
            </div>
          </div>

          <div
            class="bg-gray-50 rounded-xl p-3.5 text-center text-[10px] text-gray-400 border border-gray-100 mt-4"
          >
            Thank you for investing with LQY. If you have any questions, contact
            our support desk.
          </div>
        </div>

        <!-- Print Action Buttons (hidden in print) -->
        <div class="flex gap-3 mt-6 pt-4 border-t border-gray-100 print:hidden">
          <button
            @click="printReceipt"
            class="flex-1 bg-[#10356D] hover:bg-[#1E87F0] text-white font-bold py-2.5 rounded-xl text-ox-xs transition-colors flex justify-center items-center gap-1.5 shadow"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              ></path>
            </svg>
            Print Receipt
          </button>
          <button
            @click="downloadReceipt"
            class="flex-1 border border-gray-250 hover:bg-gray-50 text-gray-700 font-bold py-2.5 rounded-xl text-ox-xs transition-colors flex justify-center items-center gap-1.5"
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download Text
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

// Inline alert message system (replaces toast)
const alertMessage = ref("");
const alertType = ref<"success" | "error" | "info" | "warning">("info");
let alertTimeout: ReturnType<typeof setTimeout> | null = null;

const showAlert = (
  message: string,
  type: "success" | "error" | "info" | "warning" = "info",
) => {
  if (alertTimeout) clearTimeout(alertTimeout);
  alertMessage.value = message;
  alertType.value = type;
  alertTimeout = setTimeout(() => {
    alertMessage.value = "";
  }, 4500);
};

// PIN visibility toggles
const showNewPin = ref(false);
const showConfirmPin = ref(false);
const showWithdrawalPin = ref(false);
const showRepaymentPin = ref(false);

// Custom animation config
const activeTab = ref("All");
const searchQuery = ref("");
const tabs = [
  { label: "All Transactions", value: "All" },
  { label: "Withdrawals", value: "Withdrawal" },
  { label: "Credit Inflows", value: "Credit" },
  { label: "Repayments", value: "Repayment" },
];

// Persistent Wallet State
const walletBalance = ref(1500000);
const loanOutstanding = ref(850000);
const loanRepaymentDue = ref(45000);

const loanSchedule = ref([
  { date: "2026-06-15", amount: "₦45,000", status: "Paid" },
  { date: "2026-07-15", amount: "₦45,000", status: "Pending" },
  { date: "2026-08-15", amount: "₦45,000", status: "Pending" },
  { date: "2026-09-15", amount: "₦45,000", status: "Pending" },
]);

const pinSet = ref(false);
const transactionPin = ref("");

// Pre-populated default transactions
const transactions = ref<any[]>([
  {
    id: "TX-10023",
    type: "Withdrawal",
    amount: 150000,
    date: "2026-06-14 14:23",
    status: "Successful",
    reference: "WDR-992388102",
    details: "Withdrawal to GTBank Account",
    recipient: { name: "John Doe", account: "0122394857", bank: "GTBank" },
  },
  {
    id: "TX-10022",
    type: "Repayment",
    amount: 45000,
    date: "2026-06-12 09:15",
    status: "Successful",
    reference: "PAY-488291039",
    details: "Loan Installment Repayment",
  },
  {
    id: "TX-10021",
    type: "Credit",
    amount: 500000,
    date: "2026-06-08 11:30",
    status: "Successful",
    reference: "CRD-019283745",
    details: "Lending Bank Loan Disbursement Credit",
  },
  {
    id: "TX-10020",
    type: "Credit",
    amount: 350000,
    date: "2026-06-01 10:00",
    status: "Successful",
    reference: "CRD-009182736",
    details: "Startup Lending Partner Inflow",
  },
]);

// Calculated Statistics
const totalInflows = computed(() => {
  return transactions.value
    .filter((tx) => tx.type === "Credit" && tx.status === "Successful")
    .reduce((sum, tx) => sum + tx.amount, 0);
});

const totalOutflows = computed(() => {
  return transactions.value
    .filter((tx) => tx.type === "Withdrawal" && tx.status === "Successful")
    .reduce((sum, tx) => sum + tx.amount, 0);
});

const totalRepaymentsSum = computed(() => {
  return transactions.value
    .filter((tx) => tx.type === "Repayment" && tx.status === "Successful")
    .reduce((sum, tx) => sum + tx.amount, 0);
});

// Tab & Search Filtering
const filteredTransactions = computed(() => {
  return transactions.value.filter((tx) => {
    // Tab check
    if (activeTab.value !== "All" && tx.type !== activeTab.value) {
      return false;
    }
    // Search check
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      const idMatch = tx.id.toLowerCase().includes(query);
      const refMatch = tx.reference.toLowerCase().includes(query);
      const bankMatch =
        tx.recipient?.bank?.toLowerCase().includes(query) || false;
      const detailsMatch = tx.details.toLowerCase().includes(query);
      return idMatch || refMatch || bankMatch || detailsMatch;
    }
    return true;
  });
});

// Modals Trigger State
const showPinSetupModal = ref(false);
const showWithdrawalModal = ref(false);
const showLoanRepaymentModal = ref(false);
const showReceiptModal = ref(false);

// Form states
const newPin = ref("");
const confirmPin = ref("");

const withdrawalForm = ref({
  accountNumber: "",
  bankName: "",
  accountName: "",
  amount: null as number | null,
  pin: "",
});

const isVerifyingAccount = ref(false);

const repaymentForm = ref({
  amount: 45000,
  pin: "",
});

const selectedTx = ref<any>({});

// Verification Mocking
const handleAccountNumberInput = () => {
  // Reset verification details
  withdrawalForm.value.bankName = "";
  withdrawalForm.value.accountName = "";

  if (withdrawalForm.value.accountNumber.length === 10) {
    isVerifyingAccount.value = true;

    // Simulate API Delay
    setTimeout(() => {
      isVerifyingAccount.value = false;

      const banks = [
        "Access Bank",
        "GTBank",
        "Zenith Bank",
        "UBA",
        "Fidelity Bank",
      ];
      const randomIndex = Math.floor(Math.random() * banks.length);
      withdrawalForm.value.bankName = banks[randomIndex];
      withdrawalForm.value.accountName = "John Doe";

      showAlert("Account Details Verified Successfully!", "success");
    }, 1000);
  }
};

// Wallet operations
const initiateWithdrawal = () => {
  if (!pinSet.value) {
    showAlert("Please set a transaction PIN first.", "info");
    showPinSetupModal.value = true;
  } else {
    // Reset form
    withdrawalForm.value = {
      accountNumber: "",
      bankName: "",
      accountName: "",
      amount: null,
      pin: "",
    };
    showWithdrawalModal.value = true;
  }
};

const openLoanModal = () => {
  if (!pinSet.value) {
    showAlert("Please set a transaction PIN first.", "info");
    showPinSetupModal.value = true;
  } else {
    repaymentForm.value = {
      amount: loanRepaymentDue.value,
      pin: "",
    };
    showLoanRepaymentModal.value = true;
  }
};

const savePin = () => {
  if (newPin.value !== confirmPin.value) {
    showAlert("PINs do not match. Please try again.", "error");
    return;
  }
  if (newPin.value.length !== 4) {
    showAlert("PIN must be exactly 4 digits.", "error");
    return;
  }

  transactionPin.value = newPin.value;
  pinSet.value = true;

  // Persist
  localStorage.setItem("wallet_tx_pin", newPin.value);
  localStorage.setItem("wallet_pin_set", "true");

  showPinSetupModal.value = false;
  showAlert("Transaction PIN successfully configured!", "success");

  // Directly redirect to open withdrawal
  withdrawalForm.value = {
    accountNumber: "",
    bankName: "",
    accountName: "",
    amount: null,
    pin: "",
  };
  showWithdrawalModal.value = true;

  // Reset fields
  newPin.value = "";
  confirmPin.value = "";
};

const executeWithdrawal = () => {
  const form = withdrawalForm.value;

  if (!form.amount || form.amount <= 0) {
    showAlert("Please enter a valid amount.", "error");
    return;
  }
  if (form.amount > walletBalance.value) {
    showAlert("Insufficient wallet balance.", "error");
    return;
  }
  if (form.pin !== transactionPin.value) {
    showAlert("Incorrect Transaction PIN.", "error");
    return;
  }

  // Execute
  walletBalance.value -= form.amount;

  // Create Tx
  const newTx = {
    id: `TX-${Math.floor(Math.random() * 90000) + 10000}`,
    type: "Withdrawal",
    amount: form.amount,
    date: getFormattedNow(),
    status: "Successful",
    reference: `WDR-${Math.floor(Math.random() * 900000000) + 100000000}`,
    details: `Withdrawal to ${form.bankName}`,
    recipient: {
      name: form.accountName,
      account: form.accountNumber,
      bank: form.bankName,
    },
  };

  transactions.value.unshift(newTx);

  // Save balances & transactions to localStorage
  saveToLocalStorage();

  showWithdrawalModal.value = false;
  selectedTx.value = newTx;
  showReceiptModal.value = true;

  showAlert("Withdrawal completed successfully!", "success");
};

const executeLoanRepayment = () => {
  const form = repaymentForm.value;

  if (!form.amount || form.amount <= 0) {
    showAlert("Please enter a valid amount.", "error");
    return;
  }
  if (form.amount > walletBalance.value) {
    showAlert("Insufficient wallet balance.", "error");
    return;
  }
  if (form.amount > loanOutstanding.value) {
    showAlert(
      "Repayment amount exceeds the outstanding loan balance.",
      "error",
    );
    return;
  }
  if (form.pin !== transactionPin.value) {
    showAlert("Incorrect Transaction PIN.", "error");
    return;
  }

  // Execute
  walletBalance.value -= form.amount;
  loanOutstanding.value -= form.amount;

  // Update repayment schedule
  if (loanSchedule.value[1]) {
    loanSchedule.value[1].status = "Paid";
  }

  // Create Tx
  const newTx = {
    id: `TX-${Math.floor(Math.random() * 90000) + 10000}`,
    type: "Repayment",
    amount: form.amount,
    date: getFormattedNow(),
    status: "Successful",
    reference: `PAY-${Math.floor(Math.random() * 900000000) + 100000000}`,
    details: "Loan Installment Repayment",
  };

  transactions.value.unshift(newTx);

  // Save balances & transactions to localStorage
  saveToLocalStorage();

  showLoanRepaymentModal.value = false;
  selectedTx.value = newTx;
  showReceiptModal.value = true;

  showAlert("Loan repayment processed successfully!", "success");
};

const viewReceipt = (tx: any) => {
  selectedTx.value = tx;
  showReceiptModal.value = true;
};

const printReceipt = () => {
  if (process.client) {
    window.print();
  }
};

const downloadReceipt = () => {
  if (process.client) {
    const tx = selectedTx.value;
    let textContent = `
=========================================
          LQY TRANSACTION RECEIPT
=========================================
Transaction ID: ${tx.id}
Reference:      ${tx.reference}
Type:           ${tx.type}
Amount:         NGN ${formatCurrency(tx.amount)}
Date & Time:    ${tx.date}
Description:    ${tx.details}
Narration:      ${tx.description || "N/A"}
Status:         ${tx.status}
    `;
    if (tx.recipient) {
      textContent += `
Recipient Bank: ${tx.recipient.bank}
Account Number: ${tx.recipient.account}
Account Name:   ${tx.recipient.name}
      `;
    }
    textContent += `
=========================================
Thank you for investing with LQY.
=========================================
    `;
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Receipt-${tx.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);

    if (toast) toast.success("Receipt text downloaded successfully.");
  }
};

// Helpers
const getFormattedNow = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  }).format(amount);
};

const getTypeBadgeClass = (type: string) => {
  switch (type) {
    case "Withdrawal":
      return "bg-red-50 text-red-600";
    case "Credit":
      return "bg-green-50 text-green-600";
    case "Repayment":
      return "bg-purple-50 text-purple-600";
    default:
      return "bg-gray-150 text-gray-700";
  }
};

// Load and save state
const saveToLocalStorage = () => {
  if (process.client) {
    localStorage.setItem("wallet_balance", String(walletBalance.value));
    localStorage.setItem("loan_outstanding", String(loanOutstanding.value));
    localStorage.setItem(
      "wallet_transactions",
      JSON.stringify(transactions.value),
    );
  }
};

onMounted(() => {
  if (process.client) {
    // Balances
    const savedBalance = localStorage.getItem("wallet_balance");
    if (savedBalance !== null) walletBalance.value = Number(savedBalance);

    const savedLoan = localStorage.getItem("loan_outstanding");
    if (savedLoan !== null) loanOutstanding.value = Number(savedLoan);

    // Transactions
    const savedTxs = localStorage.getItem("wallet_transactions");
    if (savedTxs !== null) {
      transactions.value = JSON.parse(savedTxs);
    } else {
      saveToLocalStorage();
    }

    // PIN Setup
    const pinState = localStorage.getItem("wallet_pin_set");
    const savedPin = localStorage.getItem("wallet_tx_pin");
    if (pinState === "true" && savedPin) {
      pinSet.value = true;
      transactionPin.value = savedPin;
    }
  }
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fade-in {
  animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@media print {
  body * {
    visibility: hidden;
  }
  #receipt-content,
  #receipt-content * {
    visibility: visible;
  }
  #receipt-content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>
