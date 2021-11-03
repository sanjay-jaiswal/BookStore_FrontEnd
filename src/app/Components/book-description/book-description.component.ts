import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookService } from 'src/app/Services/book/book.service';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.scss']
})
export class BookDescriptionComponent implements OnInit {

  @Input() bookdetails!: any
  @Output("init") init: EventEmitter<any> = new EventEmitter();
  FeedbackForm!: FormGroup
  feedBackList :any = [];

  added = false;
  total = 0;
  cartDetail: any = [];
  BookId:any;
  storeData:any;

  constructor( private snackBar: MatSnackBar, private bookService:BookService) { }

  ngOnInit(): void {

    this.FeedbackForm = new FormGroup({
      rate: new FormControl(''),
      comment: new FormControl('', Validators.required)
    })
    
    this.init.emit();
  }
  Resize() {
    var textArea = document.getElementById("textarea")!
    textArea.style.height = 'auto';
    textArea.style.height = Math.min(500, textArea.scrollHeight) + 'px';
  }




  DisplayBookDetails() {
    this.bookService.FetchAllBooksData().subscribe((res: any) => {
      res.result.forEach((resData: any) => {
        if (resData._id == this.BookId) {
          this.storeData = resData;
        }
      });

      console.log(this.storeData);
    })
  }

 AddToWishList() {
    this.bookService.AddBookToWishList(this.storeData._id).subscribe(
      (response: any) => {
        console.log(response);
        this.snackBar.open(response.message, "close", {
          duration: 1800,
        })
      },
    )
  }
  

  AddToCart() { }

  // AddtoWishList() {}

  GetCart() {}

  AddBooktoCart(){}

  AddToFeedBack() {}

  GetFeedBack() {}



}



