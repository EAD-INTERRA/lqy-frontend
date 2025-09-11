import axios from "axios";
import { type BaseServiceInterface, BaseService } from "./BaseService";
import { type ShareholderServiceInterface, ShareholderService } from "./ShareholderService"

export interface ServiceProviderInterface {
  base: BaseServiceInterface;
  shareholder: ShareholderServiceInterface;
}

export const serviceProvider = (token): ServiceProviderInterface => {
  const client = axios.create({
    baseURL: "https://lqy-financial-institutionsapi.interranetworks.com/api/v1/", //Test
    // baseURL: 'http://131.226.242.233:5555/api/v1/broker', //Local
  });
  const admin = axios.create({
    // baseURL: 'http://localhost:4444/api/v1/' //Local
    baseURL: "https://lqy-adminapi.interranetworks.com/api/v1/", //TEST
  });
  return {
    base: new BaseService(client),
    shareholder: new ShareholderService(admin),
  };
};
