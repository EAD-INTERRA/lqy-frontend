import type { AxiosInstance } from "axios";

let token = '';
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token");
  }

export interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    type: string;
    company_name: string;
    created_at: string;
    email: string;
    city: string;
    profile_id: string;
    user_id: number;
    state_id: number;
  }

interface GetProfileResponse {
    body: string;
    message: string;
    code: number;
}

export interface BaseServiceInterface {
    getProfile(): Promise<GetProfileResponse>;
}

export class BaseService implements BaseServiceInterface {
    client: AxiosInstance;

    constructor(base: AxiosInstance) {
        this.client = base;
    }

    async getProfile(): Promise<GetProfileResponse> {
        try {
            const response = await this.client.get('/get_profile', { headers: { authorization: "Bearer " + token } }) 
            return response.data   
        } catch (error) {
            throw error 
        }
    }
}