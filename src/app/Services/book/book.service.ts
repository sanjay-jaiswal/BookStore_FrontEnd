import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  baseURL = environment.baseUrl
  GetToken:any;

  constructor(private http: HttpServiceService) { }

  FetchAllBooksData() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.GetService(this.baseURL + '/bookstore_user/get/book', false, headers);  }



    AddBookToWishList(productID: any) {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'x-access-token': this.GetToken
        })
      }
      return this.http.post(this.baseURL + "/bookstore_user/add_wish_list/" + productID, null, true, headers);
    }

}
