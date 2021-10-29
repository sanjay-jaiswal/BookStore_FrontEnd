import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

import {HttpServiceService} from 'src/app/Services/HttpService/http-service.service';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  //header:any="";


  constructor(private http:HttpClient) {}

    Register(data: any) {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json'
        })
      }

      let userData = {
        fullName: data.FullName,
        email: data.Email,
        password: data.Password,
        phone:data.Mobile
      }
      console.log(userData);
      return this.http.post(`${environment.baseUrl}/bookstore_user/registration`,userData,true && headers);
    }

    Login(data:any){
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json'
        })
      }

      let userData = {
        email: data.email,
        password: data.password,
      }
      console.log(userData);
      return this.http.post(`${environment.baseUrl}/bookstore_user/login`,userData,true && headers);
    }
    
   }
