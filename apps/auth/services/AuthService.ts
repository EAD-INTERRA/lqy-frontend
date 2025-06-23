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

export interface SignupInput {
    company_name: string;
    email: string;
    first_name: string;
    last_name: string;
    country_code: string;
    state_id: number;
    type: string;
    city: string;
    password: string;
}
interface  SignupResponse {
    body: string;
    message: string;
    code: number;
}

export interface AuthServiceInterface {
    login(input: LoginInput): Promise<LoginResponse>
    signup(input: SignupInput): Promise<SignupResponse>
}

export class AuthService implements AuthServiceInterface {
    client: AxiosInstance;

    constructor(auth: AxiosInstance) {
        this.client = auth;
    }

    async login(input: LoginInput): Promise<LoginResponse> {
        try {
            const response = await this.client.post('auth/login', input) 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
    
    
    async signup(input: SignupInput): Promise<SignupResponse> {
        try {
            const response = await this.client.post('', input) 
            return response.data   
        } catch (error) {
            throw error 
        }
        
    }
}