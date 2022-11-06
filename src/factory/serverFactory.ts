import WsServerImpl from "../ws/server";
import HttpServerImpl from "../http/server";
import Server from "../interfaces/server";

export interface ServerFactory {
    setServer(type: string) : Server
}

export default class ServerFactoryImpl implements ServerFactory {
    constructor(private type: string) {
    }

    setServer(): Server {
        switch (this.type.toLowerCase()){
            case 'ws':
                return new WsServerImpl()
            case 'http':
                return new HttpServerImpl()
        }
    }
}