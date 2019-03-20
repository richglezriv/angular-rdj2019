import { DataServiceFactory } from "./data-service.factory";
import { DataService } from "./data.service";

export { DataServiceFactory } from "./data-service.factory";
export { DataService } from "./data.service";

export const CORE_SERVICES = [
  DataServiceFactory,
  DataService
]