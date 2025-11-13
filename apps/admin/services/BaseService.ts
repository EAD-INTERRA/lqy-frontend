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
    getProfiles(): Promise<any>;
      getBrokers(): Promise<GetProfileResponse>;

}

export class BaseService implements BaseServiceInterface {
    client: AxiosInstance;

    constructor(base: AxiosInstance) {
        this.client = base;
    }

     async getBrokers(): Promise<GetProfileResponse> {
    try {
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
      const response = await this.client.get("base/get_stakeholders?type=Broker&page=1&size=5", {
    //   const response = await this.client.get("base", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getBroker Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

    async getProfiles(): Promise<any> {
        try {
            const tokenObj = localStorage.getItem("authToken") || localStorage.getItem("token");
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
            const response = await this.client.get("/profile", {
                headers: { authorization: "Bearer " + authToken },
            });
            return response.data;
        } catch (error) {
            throw error;
        }
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