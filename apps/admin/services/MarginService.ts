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


export interface Margin {
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
  }

interface GetMarginsResponse {
    body: Margin[];
    message: string;
    code: number;
}

export interface Margin {
    code: string;
    name: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    archived: boolean
  }

interface GetMarginResponse{
    body: Margin[];
    message: string;
    code: number;
}

interface GetMarginInput{
    id: string
}

interface ApproveMarginResponse{
    body: string;
    message: string;
    code: number;
}

interface ApproveMarginInput{
    status: boolean
}

export interface MarginServiceInterface {
    getMargins(): Promise<GetMarginsResponse>;
}

export class MarginService implements MarginServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }



    async getMargins(): Promise<GetMarginsResponse> {
        try {
            const response = await this.client.get('margin', { headers: { authorization: "Bearer " + token } }) 
            console.log(response)
            return response.data   
        } catch (error) {
            throw error 
        }
    }
    
    async uploadMargin(): Promise<GetMarginResponse> {
        try {
            const response = await this.client.post(`margin`, { headers: { authorization: "Bearer " + token } }) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}



