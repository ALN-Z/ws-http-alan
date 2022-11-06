import {WebSocket} from 'ws';
import {config} from "../config";
import * as fs from 'fs'
import {Client} from "../interfaces/client";

export default class WsClientImpl implements Client {
    static timer: number
    private wsSocket: WebSocket

    constructor() {
        this.wsSocket = new WebSocket('ws://' + process.env.host + ':' + process.env.port + '/')
    }

    init(): void {
        this.checkConnection()
        this.sendFile()
        this.logMessage()
        this.close()
    }

    checkConnection(): void {
        this.wsSocket.on('open', function open() {
            console.log('connected');
        });
    }

    sendFile(): void {
        this.wsSocket.onopen = () => {
            fs.readFile('/home/alan/google-chrome-stable_current_amd64.deb', (arr, data) => {
                console.log(data.length)
                WsClientImpl.timer = Date.now()
                this.wsSocket.send(data)
            })
        }
    }

    close(): void {
        this.wsSocket.on('close', function close() {
            console.log('disconnected');
        });
    }

    logMessage(): void {
        this.wsSocket.on('message', function message() {
            console.log(`Time used: ${Date.now() - WsClientImpl.timer} ms`);
        });
    }
}

