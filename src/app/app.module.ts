import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AddnewobjComponent } from './addnewobj/addnewobj.component';

import { AddService } from './add.service';
import { SearchService } from './search.service';
import { BookService } from './book.service'
import { SearchComponent } from './search/search.component';
import { CommisionPipe } from './commision.pipe';
import { FilledFormDirective } from './filled-form.directive';
import { BookObjectComponent } from './book-object/book-object.component';
import { Search2Component } from './search2/search2.component';

@NgModule({
  declarations: [
    AppComponent,
    AddnewobjComponent,
    SearchComponent,
    CommisionPipe,
    FilledFormDirective,
    BookObjectComponent,
    Search2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        {
        path:'',
        component:SearchComponent
        },
        {
        path:'add',
        component:AddnewobjComponent
        },
        {
          path:'booking',
          component: BookObjectComponent
        }

    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AddService,
    SearchService,
    BookService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
