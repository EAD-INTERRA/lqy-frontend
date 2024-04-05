import type { AxiosInstance } from "axios";

export interface Country {
    name: string;
    code: string;
    created_at: string;
    updated_at: string;
  }

interface GetCountriesResponse {
    body: Country[];
    message: string;
    code: number;
}

export interface Roles {
    id: string;
    name: string;
  }

interface GetRolesResponse {
    body: Country[];
    message: string;
    code: number;
}

export interface BaseServiceInterface {
    getCountries(): Promise<GetCountriesResponse>;
    getRoles(): Promise<GetRolesResponse>;
}

export class BaseService implements BaseServiceInterface {
    client: AxiosInstance;

    constructor(base: AxiosInstance) {
        this.client = base;
    }

    async getCountries(): Promise<GetCountriesResponse> {
        try {
            const response = await this.client.get('base/country') 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
    
    async getRoles(): Promise<GetRolesResponse> {
        try {
            const response = await this.client.get('base/roles') 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}