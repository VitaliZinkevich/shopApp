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

@NgModule({
  declarations: [
    AppComponent,
    AddnewobjComponent,
    SearchComponent,
    CommisionPipe,
    FilledFormDirective
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
