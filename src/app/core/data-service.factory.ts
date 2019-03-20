import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { DataService } from "./data.service";

@Injectable()
export class DataServiceFactory {

  constructor(private readonly http: HttpClient){}

  create(endPoint: string): DataService{
    return new DataService(this.http, endPoint);
  }
}