import { DataServiceFactory } from "./data-service.factory";
import { DataService } from "./data.service";
import { TakeUntilDestroy } from './decorators/unsubscribe-decorator';

export { DataServiceFactory } from "./data-service.factory";
export { DataService } from "./data.service";
export { TakeUntilDestroy } from './decorators/unsubscribe-decorator';

export const CORE_SERVICES = [
  DataServiceFactory,
  DataService,
  TakeUntilDestroy
]