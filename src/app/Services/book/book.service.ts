import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  baseURL = environment.baseUrl

  constructor(private http: HttpServiceService) { }

  FetchAllBooksData() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.GetService(this.baseURL + '/bookstore_user/get/book', false, headers);  }


}
