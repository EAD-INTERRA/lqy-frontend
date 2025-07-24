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

export interface State {
    code: string;
    name: string;
    country_code: string;
    created_at: string;
    updated_at: string;
    archived: boolean
  }

interface GetStateResponse{
    body: State[];
    message: string;
    code: number;
}

interface GetStateInput{
    country_code: string
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
    getStatesByCountry(input:  GetStateInput): Promise<GetStateResponse>;
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
    
    async getStatesByCountry(input: GetStateInput): Promise<GetStateResponse> {
        try {
            const response = await this.client.get(`base/country/state/${input.country_code}`  ) 
            console.log("getStatesByCountry", response)
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