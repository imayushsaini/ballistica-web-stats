import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};


@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(private http:HttpClient) { }

  getLiveStats():Observable<any>{
      return this.http.get('/live');
  }
  getDiscord():Observable<any>{
    return this.http.get("/discord");
  }
  getVapidKey():Observable<any>{
    return this.http.get("/vapidkey");
  }
  getServerName():Observable<any>{
    return this.http.get("/serverName");
  }

}
