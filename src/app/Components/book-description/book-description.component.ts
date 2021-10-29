import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  constructor( private snackBar: MatSnackBar) { }

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
  AddtoWishList() {}

  GetCart() {}

  AddBooktoCart(){}

  AddToFeedBack() {}

  GetFeedBack() {}



}



