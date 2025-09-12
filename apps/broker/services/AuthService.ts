import type { AxiosInstance } from "axios";

export interface GetStateInput {
  country_code: string;
}

interface GetStateResponse {
  body: string;
  message: string;
  code: number;
}

interface GetProfileResponse {
  body: string;
  message: string;
  code: number;
}

export interface AuthServiceInterface {
  getCountries(): Promise<GetProfileResponse>;
  getStatesByCountry(input: GetStateInput): Promise<GetStateResponse>;
}

export class AuthService implements AuthServiceInterface {
  client: AxiosInstance;

  constructor(auth: AxiosInstance) {
    this.client = auth;
  }

  async getCountries(): Promise<GetProfileResponse> {
    const tokenObj = localStorage.getItem("authToken");
    let authToken = "";
    if (tokenObj) {
      try {
        const parsed = JSON.parse(tokenObj);
        authToken = parsed.value;
      } catch {
        authToken = tokenObj; // fallback if not JSON
      }
    }
    if (!authToken) {
      throw new Error("Authorization token is missing");
    }
    console.log("Authorization token:", authToken);
    try {
      const response = await this.client.get("/country", {
        headers: { authorization: "Bearer " + authToken },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getStatesByCountry(input: GetStateInput): Promise<GetStateResponse> {
    const tokenObj = localStorage.getItem("authToken");
    let authToken = "";
    if (tokenObj) {
      try {
        const parsed = JSON.parse(tokenObj);
        authToken = parsed.value;
      } catch {
        authToken = tokenObj; // fallback if not JSON
      }
    }
    if (!authToken) {
      throw new Error("Authorization token is missing");
    }
    console.log("Authorization token:", authToken);
    try {
      const response = await this.client.get(`/country/state/${input.country_code}`, {
        headers: { authorization: "Bearer " + authToken },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
