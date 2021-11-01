import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book/book.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit {

  box:any
  selectedValue:any

  books = [];

  bookArray:any
  totalBooks:any

  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.FetchAllBooks();

    this.box = [
      { "value": "Sort by relevance" },
      { "value": "Price : Low to High" },
      { "value": "Price : High to Low" },
      { "value": "Newest Arrivals" }
    ];
    this.selectedValue = this.box[0].value;
  }

  FetchAllBooks(){
    this.bookservice.FetchAllBooksData().subscribe((response:any)=>{
      console.log(response.result);
      this.bookArray=response.result;
      this.totalBooks = response.result.length;

    })
  }

  
}
