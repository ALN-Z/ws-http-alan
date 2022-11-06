import {ServerStrategyImpl} from "./strategy";
import {config} from "./config";
import ServerFactoryImpl from "./factory/serverFactory";
import * as dotenv from 'dotenv'

dotenv.config()

const serverFactory = new ServerFactoryImpl(config.serverType)
const startStrategy = new ServerStrategyImpl(serverFactory.setServer())
console.log(process.env.PORT, 'PORT THERE')
startStrategy.executeServer()
