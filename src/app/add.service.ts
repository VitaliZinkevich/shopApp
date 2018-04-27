import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddService {

  constructor(private http: HttpClient) { }


addBookingObject ()  {
  console.log ('addBookingObject')
  return this.http.get ('api/test').subscribe((data) => console.log (data)))
}

}
