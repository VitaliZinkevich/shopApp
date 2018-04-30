import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Newobj, Main, /*Price,*/ Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'



interface bringSearchDataStatus{
  status: Boolean,
  message: String,
  data:[]<Newobj>,
}



@Injectable()
export class SearchService {

  httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'

       })
     };


  constructor(private http: HttpClient) { }

  SearchFindBookingsObjsAtDb (serchData) {

    return this.http.post<bringSearchDataStatus> ('/api/search', {serchData}, this.httpOptions)

  }

}
