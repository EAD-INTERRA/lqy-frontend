import type { AxiosInstance } from "axios";

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

export interface ShareholderServiceInterface {
    getShareholders(): Promise<GetShareholdersResponse>;
    getShareholderById(input:  GetShareholderInput): Promise<GetShareholderResponse>;
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
    
    async getShareholderById(input:  GetShareholderInput): Promise<GetShareholderResponse> {
        try {
            const response = await this.client.get(`stakeholder/${input.id}`  ) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}