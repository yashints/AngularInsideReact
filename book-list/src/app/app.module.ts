import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  declarations: [
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    BookListComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(BookListComponent, { injector });
    customElements.define('book-list', customElement);
  }

  ngDoBootstrap() { }
}
