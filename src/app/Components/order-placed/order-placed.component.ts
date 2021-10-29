import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {
  isSearch = false;
  option = 'Home';
  orderId : any;
  BookStoreUser =  JSON.parse(localStorage.getItem("BookStoreUser")!); 


  constructor() { }

  ngOnInit(): void {
  }
  GoToHome()
  {
  }

  Logout(){}

}
