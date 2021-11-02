import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book/book.service';
import { Router } from '@angular/router';

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
  ViewBook:any
  BookId:any
  storeResult:any

  constructor(private bookservice:BookService, private router:Router) { }

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

      this.BookId = localStorage.getItem('BookId');
      this.ShowBookDetails();

    })
  }

  // ClickOnBookToViewDetails(_id:any){
  //   this.bookservice.FetchAllBooksData().subscribe((response:any)=>{
  //     console.log(response.result);
  //     this.ViewBook=response.result;

  //     this.router.navigateByUrl('/home/description')
  //   })
  // }

  ShowBookDetails() {
    this.bookservice.FetchAllBooksData().subscribe((res: any) => {
      res.result.forEach((storeBook: any) => {
        if (storeBook._id == this.BookId) {
          this.storeResult = storeBook;
        }
      });
    })
  }


  DisplayBookDetails(book:any){
    localStorage.setItem('BookId',book._id);
    this.router.navigateByUrl('/home/description')

  }



}
