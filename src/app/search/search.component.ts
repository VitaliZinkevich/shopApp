import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Newobj, Main, /*Price,*/ Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'
import  { SearchService } from "../search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;
type= TYPES;
adressList=adressOption;

countryIndex:number;
countrySelected : boolean = false;

forDisplay:any;
showBokings = false;

  constructor( private  fb: FormBuilder,
                private search: SearchService) {

    this.searchForm = fb.group({
      title: ['', Validators.required],
      type: '',
      country: '',
      region: '',
      adult: '',
      children:'',
      dateCheckIn: '',
      dateCheckOut:''
      });

     }

  ngOnInit() {
  }

  startSearch (){
    let serchData = this.searchForm.value
    this.search.SearchFindBookingsObjsAtDb(serchData).subscribe ((data)=> {

        this.forDisplay = data.data
        console.log (data.data)

        this.showBokings = true



     })
  }

  checkCountry(event){

    let elementPos = this.adressList.map(function(x) {return x.country }).indexOf(event);
    this.countryIndex = elementPos;
    this.countrySelected = true

  }

  bookOne (i, indx){
console.log (i, indx)

console.log (this.forDisplay[i].rooms[indx])

let children = this.searchForm.get('children').value
let adult = this.searchForm.get('adult').value
let dateCheckIn =  this.searchForm.get('dateCheckIn').value
let dateCheckOut =  this.searchForm.get('dateCheckOut').value

let oneDay = 24*60*60*1000;

//var count: any = Math.floor ((Math.abs(new Date(dateCheckOut) - new Date (dateCheckIn)))/oneDay)
/*
let nights = count
console.log (nights)
let days = nights+1
*/
//console.log (dateCheckIn, children) works

  }


}
