import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddnewobjComponent } from './addnewobj/addnewobj.component';

import { AddService } from './add.service';

@NgModule({
  declarations: [
    AppComponent,
    AddnewobjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AddService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
