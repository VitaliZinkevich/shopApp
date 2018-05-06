import { Component, OnInit } from '@angular/core';
import { BookService } from "../book.service";


@Component({
  selector: 'app-book-object',
  templateUrl: './book-object.component.html',
  styleUrls: ['./book-object.component.css']
})
export class BookObjectComponent implements OnInit {

test: any = ' change me'


  constructor(private book: BookService) { }

  ngOnInit() {
    console.log (this.book.getDataAboutOrder())
  }

}
