import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book/book.service';

@Component({
  selector: 'app-displaybooks',
  templateUrl: './displaybooks.component.html',
  styleUrls: ['./displaybooks.component.scss']
})
export class DisplaybooksComponent implements OnInit {

  bookArray:any


  constructor(private bookservice:BookService) { }

  ngOnInit(): void {
    this.FetchAllBooks();
  }

  FetchAllBooks(){
    this.bookservice.FetchAllBooksData().subscribe((response:any)=>{
      console.log(response.result);
      this.bookArray=response.result;

    })
  }
  
}
