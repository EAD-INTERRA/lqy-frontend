import type { AxiosInstance } from "axios";

import { useAuthStore } from 'stores/authStore';
import { createPinia } from 'pinia';

const RETRY_INTERVAL = 1000; // Retry interval in milliseconds
const MAX_RETRY_COUNT = 10; // Maximum number of retry attempts

const pinia = createPinia();
pinia.use(useAuthStore);
const authStore = useAuthStore(pinia);
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const retryAuthStoreBearerToken = async (): Promise<string> => {
    const isLoggedIn = authStore.isLoggedIn;
    const isAuthenticated = authStore.isAuthenticated;
    console.log("Chaii",isAuthenticated);
    
    let retryCount = 0;
    let token = '';

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

    if (!token) {
        console.error("Failed to retrieve token after maximum retry attempts.");
    }

    return token;
};


(async () => {
    let token = "";
    {
        token = await retryAuthStoreBearerToken();
        console.log("SER", token);
    }
})();


export interface Shareholder {
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
  }

interface GetShareholdersResponse {
    body: Shareholder[];
    message: string;
    code: number;
}

export interface Shareholder {
    code: string;
    name: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    archived: boolean
  }

interface GetShareholderResponse{
    body: Shareholder[];
    message: string;
    code: number;
}

interface GetShareholderInput{
    id: string
}

interface ApproveShareholderResponse{
    body: string;
    message: string;
    code: number;
}

interface ApproveShareholderInput{
    status: boolean
}

export interface ShareholderServiceInterface {
    getShareholders(): Promise<GetShareholdersResponse>;
    getShareholderById(shareholderId: number): Promise<GetShareholderResponse>;
    approveShareholder(shareholderId: number, input: ApproveShareholderInput): Promise<ApproveShareholderResponse>
}

export class ShareholderService implements ShareholderServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }



    async getShareholders(): Promise<GetShareholdersResponse> {
        try {
            const response = await this.client.get('stakeholder?page=1&size=5&type=') 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
    
    async getShareholderById(shareholderId: number): Promise<GetShareholderResponse> {
        try {
            const response = await this.client.get(`stakeholder/${shareholderId}`) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }

    async approveShareholder(shareholderId: number, input: ApproveShareholderInput): Promise<ApproveShareholderResponse> {
        try {
            const response = await this.client.put(`stakeholder/${shareholderId}/status`, input);
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}



