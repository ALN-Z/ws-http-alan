import Server from "./interfaces/server";
import {Client} from "./interfaces/client";
import {ClientStrategy, ServerStrategy} from "./interfaces/strategy";

export class ServerStrategyImpl implements ServerStrategy {
    constructor(private server: Server) {}

    executeServer() : void {
        return this.server.startServer()
    }
}

export class ClientStrategyImpl implements ClientStrategy {
    constructor(private client: Client) {}

    executeClient() : void {
        return this.client.init()
    }
}