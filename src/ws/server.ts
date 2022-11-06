import { WebSocket, WebSocketServer } from 'ws';
import { config } from '../config';
import Server from "../interfaces/server";

export default class WsServerImpl implements Server {

    public startServer(): void {
        const wss = new WebSocketServer({ port: process.env.PORT})
        this.onConnection(wss)
    }

    private onConnection(wss): void {
        wss.on('connection', function connection(ws) {
            console.log("CONNECTED")
            ws.on('message', function message(data, isBinary) {
                console.log(data.length)
                wss.clients.forEach(function each(client) {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(data, { binary: isBinary });
                    }
                });
            });
        });
    }
}

