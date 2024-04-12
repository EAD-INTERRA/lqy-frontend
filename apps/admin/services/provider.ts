import axios from "axios"
import { type ShareholderServiceInterface, ShareholderService } from "./ShareholderService"
import { type BaseServiceInterface, BaseService } from "./BaseService"

export interface ServiceProviderInterface {
    shareholder: ShareholderServiceInterface;
    base: BaseServiceInterface;
}

export const serviceProvider = (): ServiceProviderInterface => {
    const client = axios.create({
        baseURL: 'http://localhost:3333/api/v1/'
    })
    return {
        shareholder: new ShareholderService(client),
    }
}