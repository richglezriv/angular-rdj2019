import { DataServiceFactory } from "./data-service.factory";
import { DataService } from "./data.service";
import { TakeUntilDestroy } from './decorators/unsubscribe-decorator';
import { tokenGetter, RdjAuthService } from './authentication/rdj-authentication.service';
import { BootstrapperService } from './bootstrapper.service';
import { GuardRoute } from './guard-route';

export { DataServiceFactory } from "./data-service.factory";
export { DataService } from "./data.service";
export { TakeUntilDestroy } from './decorators/unsubscribe-decorator';
export { tokenGetter, RdjAuthService } from './authentication/rdj-authentication.service';
export { BootstrapperService } from './bootstrapper.service';
export { GuardRoute } from './guard-route';

export const CORE_SERVICES = [
  DataServiceFactory,
  DataService
]