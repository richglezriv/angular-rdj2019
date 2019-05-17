import { Injectable } from "@angular/core";
import { RdjAuthService } from './authentication/rdj-authentication.service';

@Injectable()
export class BootstrapperService {
  
  constructor(private authService: RdjAuthService) { }

  bootstrap() {
    this.authService.bootstrap();
  }
}