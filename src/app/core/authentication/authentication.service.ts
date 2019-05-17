import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataService } from '../data.service';

const TOKEN: string = 'access_token';

export function tokenGetter() {
  return localStorage.getItem(TOKEN);
}

@Injectable()
export class AuthenticationService {

  private tokenResponse;
  private dataService: DataService;
  private isLoggedIn: Subject<boolean> = new Subject();

  constructor(http: HttpClient) {
    this.dataService = new DataService(http, 'Auth/Login');
  }

  isAuthenticated$: Observable<boolean> = this.isLoggedIn.asObservable();

  get isTokenExpired(): boolean {
    if (tokenGetter()) {
      const helper = new JwtHelperService();
      return helper.isTokenExpired(tokenGetter());
    }
    return true;
  }

  private setLoggedIn(isLoggedIn: boolean) {
    this.isLoggedIn.next(isLoggedIn);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.tokenResponse.token);
    localStorage.setItem(TOKEN, this.tokenResponse.token);
    delete this.tokenResponse;
  }

  async authenticate(user: string, password: string) {
    this.tokenResponse = await this.dataService
      .saveValue<any>({ userName: user, password: password }).toPromise();
    this.setLoggedIn(true);
  }

  logout() {
    localStorage.removeItem(TOKEN);
    this.isLoggedIn.next(false);
  }

  bootstrap() {
    this.isLoggedIn.next(!this.isTokenExpired);
  }
}