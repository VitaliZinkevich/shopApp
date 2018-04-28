import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { AddnewobjComponent } from './addnewobj/addnewobj.component';

import { AddService } from './add.service';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    AddnewobjComponent,
    SearchComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
