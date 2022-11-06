import Server from "../interfaces/server";
import * as http from "http";
import {config} from "../config";
// import * as dotenv from 'dotenv'
//
// dotenv.config()

export default class HttpServerImpl implements Server {

    startServer(): void {
        let httpServer = http.createServer(async (request: any, response: any) => {
            request = await this.handler(request) as string
            response.end("END")
        }).listen(process.env.PORT, () => {
            console.log(process.env.PORT, 'PORTTTTTTT')
            // console.log(process.env, 'ENVVVVVVV')
            console.log("SERVER STARTED")})
    }


    private handler(request: any) : Promise<string> {
        return new Promise((resolve,reject) => {
            let buffer = Buffer.from('')
            request.on('end', () => {
                console.log(buffer)
                resolve(buffer.toString())
            })
            request.on('data', (chunk) => {
                buffer = Buffer.concat([buffer, chunk])
                console.log(buffer)

            })
        })
    }
}