import type { AxiosInstance } from "axios";

import { useAuthStore } from "stores/authStore";
import { createPinia } from "pinia";

const RETRY_INTERVAL = 1000; // Retry interval in milliseconds
const MAX_RETRY_COUNT = 10; // Maximum number of retry attempts

const pinia = createPinia();
pinia.use(useAuthStore);
const authStore = useAuthStore(pinia);
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const retryAuthStoreBearerToken = async (): Promise<string> => {
  const isLoggedIn = authStore.isLoggedIn;
  const isAuthenticated = authStore.isAuthenticated;
  console.log("Chaii", isAuthenticated);

  let retryCount = 0;
  let token = "";

  while (!token && retryCount < MAX_RETRY_COUNT) {
    token = await authStore.BearerToken();
    if (!token) {
      console.log(`Retrying to fetch token... Retry count: ${retryCount + 1}`);
      await delay(RETRY_INTERVAL);
      retryCount++;
    } else {
      console.log("Token retrieval successful. Stopping retries.");
      break; // Break out of the retry loop if token retrieval is successful
    }
  }

  if (!token) {
    console.error("Failed to retrieve token after maximum retry attempts.");
  }

  return token;
};

(async () => {
  let token = "";
  {
    token = await retryAuthStoreBearerToken();
    console.log("SER", token);
  }
})();

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

interface GetStateInput {
  country_code: string;
}

export interface BaseServiceInterface {
  getProfiles(): Promise<GetProfileResponse>;
  createInvestor(payload: any): Promise<GetProfileResponse>;
  getAllInvestors(): Promise<GetProfileResponse>;
  getPendingMarginRequests(): Promise<GetProfileResponse>;
  getAcceptedMarginRequests(): Promise<GetProfileResponse>;
  getRejectedMarginRequests(): Promise<GetProfileResponse>;
  getAllMarginRequests(): Promise<GetProfileResponse>;
  acceptMarginRequest(id: string): Promise<GetProfileResponse>;
  rejectMarginRequest(id: string): Promise<GetProfileResponse>;
}

export class BaseService implements BaseServiceInterface {
  client: AxiosInstance;

  constructor(base: AxiosInstance) {
    this.client = base;
  }

  async getProfiles(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/get_profile", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getProfile Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createInvestor(payload: any): Promise<GetProfileResponse> {
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
      const response = await this.client.post("/create_investor", payload, {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("createInvestor Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAllInvestors(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/investors", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getPendingMarginRequests Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPendingMarginRequests(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/get_pending_margin_requests", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getPendingMarginRequests Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async getAcceptedMarginRequests(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/get_accepted_margin_requests", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getProfile Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async getRejectedMarginRequests(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/get_rejected_margin_requests", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getProfile Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async getAllMarginRequests(): Promise<GetProfileResponse> {
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
      const response = await this.client.get("/margin_requests", {
        headers: { authorization: "Bearer " + authToken },
      });
      console.log("getProfile Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async margin_request(chn: string): Promise<GetProfileResponse> {
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
      const response = await this.client.post(
        `send_margin_request/${chn}`,
        {},
        { headers: { authorization: "Bearer " + authToken } }
      );
      console.log("margin_request Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async acceptMarginRequest(id: string): Promise<GetProfileResponse> {
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
      const response = await this.client.post(
        "accept_request",
        { request_id: id },
        { headers: { authorization: "Bearer " + authToken } }
      );
      console.log("acceptMarginRequest Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async rejectMarginRequest(id: string): Promise<GetProfileResponse> {
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
      const response = await this.client.post(
        "reject_request",
        { request_id: id },
        { headers: { authorization: "Bearer " + authToken } }
      );
      console.log("rejectMarginRequest Response:", response);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
