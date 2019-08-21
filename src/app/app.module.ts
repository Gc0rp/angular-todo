import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeadingComponent } from './heading/heading.component';
import { DateComponent } from './date/date.component';
import { TodoComponent } from './todo/todo.component';
import { ShowItemsComponent } from './show-items/show-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadingComponent,
    DateComponent,
    TodoComponent,
    ShowItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
