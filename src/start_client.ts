import {ClientStrategyImpl} from "./strategy";
import {config} from "./config";
import ClientFactoryImpl from "./factory/clientFactory";

const serverFactory = new ClientFactoryImpl(config.serverType)
const startClient = new ClientStrategyImpl(serverFactory.setClient())
startClient.executeClient()
