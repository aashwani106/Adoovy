import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiHost: any;
  apiPort: any
  httpUrl: any;
  uiHost: any;
  apiProtocol: any;
  constructor(private http: HttpClient) {
    this.uiHost = window.location.hostname; // we'll check where is the client

    if (this.uiHost === "localhost") {
      this.apiProtocol = "http";
      this.apiPort = '3000';
    } else {
      this.apiProtocol = "https";
    }
    this.httpUrl = this.apiProtocol + '://' + this.uiHost + ":" + this.apiPort;
    console.log("API @ " + this.httpUrl + " is being used.");

  }


  async RegisterUser(obj: any) {
    const resp = await this.http.post<any>(this.httpUrl + '/api/v1/user/register', obj).toPromise().then(res => {
      return res;
    });
    return resp;
  }
  
  async loginUser(obj: any) {
    const resp = await this.http.get<any>(this.httpUrl + '/api/v1/user/login'+ obj).toPromise().then(res => {
      return res;
    });
    return resp;
  }
  
}



// import { environment } from '../environments/environment';


