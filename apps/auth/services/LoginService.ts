import type { AxiosInstance } from "axios";

export interface LoginInput {
    email: string;
    password: string;
}
interface LoginResponse {
    body: string;
    message: string;
    code: number;
}

export interface LoginServiceInterface {
    login(input: LoginInput): Promise<LoginResponse>
}

export class LoginService implements LoginServiceInterface {
    client: AxiosInstance;

    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async login(input: LoginInput): Promise<LoginResponse> {
        try {
            const response = await this.client.post('/token', input) 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}