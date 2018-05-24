import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Newobj, Main, /*Price,*/ Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from './newobj'



interface bringSearchDataStatus{
  status: boolean,
  message: string,
  data:any,
}

interface setUpData  {

name:string,
region:string

}



@Injectable()
export class SearchService {




  constructor(private http: HttpClient) { }

  httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'

       })
     };

  SearchFindBookingsObjsAtDb (serchData, selectedObjs) {
/*
    console.log (serchData)
    console.log (selectedObjs)
*/
    return this.http.post<bringSearchDataStatus> ('/api/search', {serchData, selectedObjs}, this.httpOptions)

  }


  getSetUpData(){

      return this.http.get<setUpData> ('/api/forsearchprimarydata')

  }

}
