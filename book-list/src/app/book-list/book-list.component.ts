import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public booksList: any[];

  @Input('books')
  set books(books: string) {
    console.log('got books: ', books);
    this.booksList = JSON.parse(books);
  }

  @Output('bookSelected') bookSelected = new EventEmitter<any>();

  constructor() {
    // tslint:disable-next-line:no-console
    console.debug(this.books);
  }

  selected(book: any) {
    this.bookSelected.emit(JSON.stringify(book));
  }
}
