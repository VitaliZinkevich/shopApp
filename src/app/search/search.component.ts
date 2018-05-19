import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Newobj, Main, /*Price,*/ Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'
import  { SearchService } from "../search.service";
import { BookService } from "../book.service";
import {Router} from '@angular/router'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

regions = [{area: 'Минская облать', formname: 'minskRegion'},
          {area: 'Витебская область', formname: 'vitebskRegion'},
          {area: 'Гомельская область',formname: 'gomelRegion'},
          {area :'Гродненская область',formname: 'grodnoRegion'},
          {area: 'Брестская область',formname: 'mogilevRegion'},
          {area: 'Могилевская область',formname: 'brestRegion'}];

setUpData:any

searchForm: FormGroup;
type= TYPES;
adressList=adressOption;

countryIndex:number;
countrySelected : boolean = false;

forDisplay:any;
showBokings = false;

days: number;
nights: number;


  constructor( private  fb: FormBuilder,
                private search: SearchService,
                private router: Router,
                private book: BookService,
              ) {

    this.searchForm = fb.group({
      title: ['', Validators.required],
      type: '',

      minskRegion: '',
      minskRegionLi: fb.array ([{name:''}]),
      vitebskRegion : '',
      vitebskRegionLi: fb.array ([]),
      gomelRegion: '',
      gomelRegionLi: fb.array ([]),
      grodnoRegion: '',
      grodnoRegionLi: fb.array ([]),
      mogilevRegion:'',
      mogilevRegionLi: fb.array ([]),
      brestRegion:'',
      brestRegionLi:fb.array ([]),



      adult: '',
      children:'',
      childerAges:fb.array ([]),
      dateCheckIn: '',
      dateCheckOut:''
      });



/*
 li serch by obj TYPES

 li search by name
 li serch by li prop

 checkbox ul data from фобоасть с фронта и растусуем при получении базы данных с сервера
 checkbox li -название отеля
*/


     }

  ngOnInit() {

    // запрос на заполнение объектов по областямы
    this.search.getSetUpData().subscribe ((data)=>{
    console.log (data)
    this.setUpData = data

  })

  }

  get childerAges(): FormArray {
    return this.searchForm.get('childerAges') as FormArray;
  }

  get minskRegionLi(): FormArray {
    return this.form.get('minskRegionLi') as FormArray;
  };


nameSelect(i) {
  console.log (i)}






/*
addChilderAges() {


if (this.searchForm.get('children').value == '') {

console.log (this.childerAges.controls.length)

let i = this.childerAges.controls.length
while (i > -1 ) {
this.childerAges.removeAt(i)
  i--
  console.log (this.childerAges.controls.length)
}








//this.childerAges.splice (0, this.childerAges.length)

  //console.log ('notthing')


} else {

  let childrenCount = this.searchForm.get('children').value

for (var i = 0; i<childrenCount;i++) {

  this.childerAges.push(this.fb.group({
    age: '',
  }));

}


}

}
*/


  startSearch (){
    let serchData = this.searchForm.value
    this.search.SearchFindBookingsObjsAtDb(serchData).subscribe ((data)=> {

        this.forDisplay = data.data
        console.log (data.data)

        this.showBokings = true


        // dates days nights
        let dateCheckIn =  this.searchForm.get('dateCheckIn').value
        let dateCheckOut =  this.searchForm.get('dateCheckOut').value
        let inD = new Date (dateCheckIn).getTime ()
        let outD = new Date (dateCheckOut).getTime ()
        let oneDay = 24*60*60*1000;

        this.nights = (outD - inD) / oneDay
        this.days = this.nights+1


     })


  }

  checkCountry(event){

    let elementPos = this.adressList.map(function(x) {return x.country }).indexOf(event);
    this.countryIndex = elementPos;
    this.countrySelected = true

  }



bookOne (i, indx){

// selected room
console.log ()
// detalis
let children = this.searchForm.get('children').value
let adult = this.searchForm.get('adult').value

let dateCheckIn =  this.searchForm.get('dateCheckIn').value
let dateCheckOut =  this.searchForm.get('dateCheckOut').value

this.book.bookingData (this.forDisplay[i].title, this.forDisplay[i].rooms[indx], children, adult,dateCheckIn,dateCheckOut,
this.nights)
this.router.navigate(['booking'])


  }


}
