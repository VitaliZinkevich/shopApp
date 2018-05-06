import { Injectable, ViewChild } from '@angular/core';
import { BookObjectComponent } from './book-object/book-object.component';



@Injectable()
export class BookService {
//@ViewChild(BookObjectComponent) child: BookObjectComponent;





object:any

room:any

adult:any
chield:any

dateIn:any
dateOut:any

nights:any
days:any






  constructor() {

}


getDataAboutOrder(){

 return {
   obj: this.object,
   room:this.room ,
   adult: this.adult ,
   children: this.chield,
   checkIn: this.dateIn ,
   checkOut: this.dateOut,
   nights: this.nights}

}




bookingData ( obj, room, children, adult, dateCheckIn, dateCheckOut,
nights){
  this.object = obj
  this.room = room
  this.adult=adult
  this.chield= children
  this.dateIn=dateCheckIn
  this.dateOut=dateCheckOut
  this.nights=nights

}


}
