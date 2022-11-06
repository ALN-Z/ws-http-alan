import HttpClientImpl from "../http/client";
import WsClientImpl from "../ws/client";
import {Client} from "../interfaces/client";

export interface ClientFactory {
    setClient(type: string) : Client
}

export default class ClientFactoryImpl implements ClientFactory {
    constructor(private type: string) {
    }

    setClient(): Client {
        switch (this.type.toLowerCase()){
            case 'ws':
                return new WsClientImpl()
            case 'http':
                return new HttpClientImpl()
        }
    }
}