import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  baseURL = environment.baseUrl
  token:any;

  constructor(private http: HttpServiceService) {
    this.token = localStorage.getItem("token");

   }

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
          'x-access-token': this.token
        })
      }
      return this.http.post(this.baseURL + "/bookstore_user/add_wish_list/" + productID, null, true, headers);
    }



    removewishlistitem(productID: any) {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'x-access-token': this.token
        })
      }
      return this.http.delete(this.baseURL + "/bookstore_user/remove_wishlist_item/" + productID, null, true, headers);
    }

    updateaddress(payload: any) {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'x-access-token': this.token
        })
      }
      return this.http.put(this.baseURL + "/bookstore_user/edit_user", payload, true, headers);
    }


    getwishlist() {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'x-access-token': this.token
        })
      }

      return this.http.GetService(this.baseURL + "/bookstore_user/get_wishlist_items", true, headers)
    }

    addcartitem(productID: any) {
      let headers = {
        headers: new HttpHeaders({
          'x-access-token': this.token,
          'content-Type': 'application/json'
        })
      }
      return this.http.post(this.baseURL + "/bookstore_user/add_cart_item/" + productID, null, true, headers);
    }

    updateitemcount(productID: any, payload: any) {
      console.log('dsdsd',payload);
      
      let headers = {
        headers: new HttpHeaders({
          'x-access-token': this.token,
          'content-Type': 'application/json'
        })
      }
      return this.http.put(this.baseURL + "/bookstore_user/cart_item_quantity/" + productID, payload, true, headers);
    }

    getCartItems() {
      let headers = {
        headers: new HttpHeaders({
          'content-Type': 'application/json',
          'x-access-token': this.token
        })
      }
      return this.http.GetService(this.baseURL + "/bookstore_user/get_cart_items", true, headers)
    }

    removecartitem(productID: any) {
      let headers = {
        headers: new HttpHeaders({
          'x-access-token': this.token,
          'content-Type': 'application/json'
        })
      }
      return this.http.delete(this.baseURL + "/bookstore_user/remove_cart_item/" + productID, null, true, headers);
    }

    orderplace(payload: any) {
      let headers = {
        headers: new HttpHeaders({
          'x-access-token': this.token,
          'content-Type': 'application/json'
        })
      }
      return this.http.post(this.baseURL + "/bookstore_user/add/order", payload, true, headers);
    }

}