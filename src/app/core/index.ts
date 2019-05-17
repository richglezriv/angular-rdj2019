import { DataServiceFactory } from "./data-service.factory";
import { DataService } from "./data.service";
import { TakeUntilDestroy } from './decorators/unsubscribe-decorator';
import { tokenGetter, AuthenticationService } from './authentication/authentication.service';
import { BootstrapperService } from './bootstrapper.service';
import { AuthGuardRoute } from './auth-guard-route';

export { DataServiceFactory } from "./data-service.factory";
export { DataService } from "./data.service";
export { TakeUntilDestroy } from './decorators/unsubscribe-decorator';
export { tokenGetter, AuthenticationService } from './authentication/authentication.service';
export { BootstrapperService } from './bootstrapper.service';
export { AuthGuardRoute } from './auth-guard-route';

export const CORE_SERVICES = [
  DataServiceFactory,
  DataService
]