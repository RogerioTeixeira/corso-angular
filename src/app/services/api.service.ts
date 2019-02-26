import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly host = 'https://corso-angular-server.herokuapp.com'
  constructor(private http: HttpClient) { }

  public get(path: string , params?:HttpParams): Observable<any> {
    return this.http.get(`${this.host}${path}` , {params:params});
  }

  public post(path: string, body: any): Observable<any> {
    return this.http.post(`${this.host}${path}`, body, {
      headers: this.setHeader()
    })
  }

  private setHeader(): HttpHeaders {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json')
    return header;
  }
}
