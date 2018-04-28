import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface insertStatus{
  status: Boolean,
  message: String
}

@Injectable()
export class AddService {

  httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'

       })
     };


  constructor(private http: HttpClient) { }


addBookingObject (formData)  {

console.log ('before send')
console.log (formData)

  return this.http.post<insertStatus> ('api/test', { formData }, this.httpOptions);
}

}
