import { Injectable } from "@angular/core";
import {CanActivate} from '@angular/router';

@Injectable()
export class GuardRoute implements CanActivate{

constructor(){}

  canActivate(
    route: any,
    state: any
  ) {
    return false;
  }
}