import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subject, ReplaySubject, from, of, range, EMPTY, defer } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable()
export class DataService {

  private apiUrl: string = "https://devrdjapi.azurewebsites.net/api";
  constructor(private http: HttpClient,
    private endPoint: string) { }

  getValues(): Observable<any[]> {
    const url = `${this.apiUrl}/${this.endPoint}`;
    let response = this.http.get<any[]>(url);
    return response;
  }

  getSomething<T>(): Observable<T> {
    return this.http.get<T>(this.getUrl());
  }

  getEntities<T>(params?: {}): Observable<T[]> {
    let httpParams: HttpParams;
    if (params) {
      for (let param in params) {
        httpParams = new HttpParams().append(param, params[param]);
      }
    }
    const url = `${this.apiUrl}/${this.endPoint}`;
    return this.http.get<T[]>(url, { params: httpParams });
  }

  getEntity<T>(id?: number, params?: {}): Observable<T> {
    if (id) {
      return this.http.get<T>(`${this.getUrl()}/${id}`);
    } else if (params) {
      let httpParams: HttpParams;

      for (let param in params) {
        httpParams = new HttpParams().append(param, params[param]);
      }
      return this.http.get<T>(this.getUrl(), { params: httpParams });
    }
    return EMPTY;
  }

  private getUrl(): string {
    return `${this.apiUrl}/${this.endPoint}`;
  }

  doSomething() {
    console.log('doing something')

    const url = `${this.apiUrl}/${this.endPoint}`;
    //let response = this.http.get(url).pipe(map(s => ({id: s}))).subscribe(s => console.log(s));
    // let response = this.http.get(url)
    range(1, 5)
      .pipe(map<number, { id: number }>(x => ({ id: x })))
      .subscribe(x => console.log(x));

  }
}