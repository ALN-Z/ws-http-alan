import {config} from "../config";
import fetch from 'node-fetch'
import * as fs from 'fs'
import {Client} from "../interfaces/client";

export default class HttpClientImpl implements Client {
    private request: any
    private firstTimer: number
    private secondTimer: number

    async init() : Promise<void> {
        await this.startRequest()
    }

    async startRequest(): Promise<void> {
        this.prepareRequest()
        this.firstTimer = Date.now()
        await this.makeRequest()
        this.secondTimer = Date.now()
        this.timeCounter()
    }
    prepareRequest(): void {
        this.request = fs.readFileSync('/home/alan/google-chrome-stable_current_amd64.deb')
    }
    async makeRequest(): Promise<void> {
        let makeRequest = await fetch('http://' + process.env.host + ':' + process.env.port + '/', {
            method: "POST",
            body: this.request
        })
    }
    timeCounter(): void {
        let timeUsage = this.secondTimer - this.firstTimer
        console.log(timeUsage)
    }
}
