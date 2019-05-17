import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subject, from, of, range, EMPTY, defer, throwError } from 'rxjs';
import { map, filter, shareReplay, catchError } from 'rxjs/operators';

@Injectable()
export class DataService {

  private apiUrl: string = "https://devrdjapi.azurewebsites.net/api";
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
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
    return this.http.get<T[]>(this.getUrl(), { params: httpParams })
      .pipe(shareReplay());
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

  saveValue<T>(params?: {}): Observable<T> {
    return this.http.post<T>(this.getUrl(),
      JSON.stringify(params),
      { headers: this.httpHeaders })
      .pipe(catchError(err => {
        console.log(err);
        return of(err);
      }));
  }
}