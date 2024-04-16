import type { AxiosInstance } from "axios";

let token = '';
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token");
  }

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
            const response = await this.client.get('stakeholder?page=1&size=5&type=', { headers: { authorization: "Bearer " + token } }) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
    
    async getShareholderById(shareholderId: number): Promise<GetShareholderResponse> {
        try {
            const response = await this.client.get(`stakeholder/${shareholderId}`, { headers: { authorization: "Bearer " + token } }) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }

    async approveShareholder(shareholderId: number, input: ApproveShareholderInput): Promise<ApproveShareholderResponse> {
        try {
            const response = await this.client.put(`stakeholder/${shareholderId}/status`, input, {
                 headers: { authorization: "Bearer " + token }
             });
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}