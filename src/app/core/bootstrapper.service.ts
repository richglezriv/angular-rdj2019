import { Injectable } from "@angular/core";
import { AuthenticationService } from './authentication/authentication.service';

@Injectable()
export class BootstrapperService {
  
  constructor(private authService: AuthenticationService) { }

  bootstrap() {
    this.authService.bootstrap();
  }
}