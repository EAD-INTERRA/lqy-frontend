import type { AxiosInstance } from "axios";

export interface LoginInput {
    username: string;
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

    constructor(auth: AxiosInstance) {
        this.client = auth;
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