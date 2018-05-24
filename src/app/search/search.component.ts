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

setUpData = {minskRegion:[], brestRegion:[],gomelRegion:[],grodnoRegion: [], mogilevRegion:[],vitebskRegion:[]}

selectedObjs=[]
titleSearch = ''
deletedSearh= {minskRegion:[], brestRegion:[],gomelRegion:[],grodnoRegion: [], mogilevRegion:[],vitebskRegion:[]}


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
    //  type: '',

      minskRegion: false,
    //  minskRegionLi: fb.array ([{name:''}]),
      vitebskRegion : false,
    //  vitebskRegionLi: fb.array ([]),
      gomelRegion: false,
    //  gomelRegionLi: fb.array ([]),
      grodnoRegion: false,
    //  grodnoRegionLi: fb.array ([]),
      mogilevRegion:false,
    //  mogilevRegionLi: fb.array ([]),
      brestRegion: false,
    //  brestRegionLi:fb.array ([]),



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


    for (let i = 0; i < Object.keys(data).length; i++) {


        if (data[i].region == 'Брестская область'){
          this.setUpData.brestRegion.push(data[i])
          }

          if (data[i].region == 'Минская область'){
            this.setUpData.minskRegion.push(data[i])
          }

          if (data[i].region == 'Витебская область'){
            this.setUpData.vitebskRegion.push(data[i])
          }

          if (data[i].region == 'Гомельская область'){
            this.setUpData.gomelRegion.push(data[i])
          }

          if (data[i].region == 'Могилевская область'){
            this.setUpData.mogilevRegion.push(data[i])
          }

          if (data[i].region == 'Гродненская область'){
            this.setUpData.grodnoRegion.push(data[i])
          }

    }

})

  this.onChanges()
  }

  get childerAges(): FormArray {
    return this.searchForm.get('childerAges') as FormArray;
  }

/*s  get minskRegionLi(): FormArray {
    return this.searchForm.get('minskRegionLi') as FormArray;
  };*/


  onChanges(): void {
  this.searchForm.get('title').valueChanges.subscribe(val => {
    this.makeTitleSearch ();
  });

}


starsClass(event) {
  //event.preventDefault()
  console.log (event.target.checked)
    console.log (event.target.value)
  /*if (event.target == 'input') {
    console.log ('input')
  }*/
}

makeTitleSearch (){

  console.log (this.searchForm.get('title').value)
  let input = this.searchForm.get('title').value
  this.searchForm.get ('minskRegion').setValue (true)
//console.log (this.setUpData)

for (var key in this.setUpData) {
    if (this.setUpData.hasOwnProperty(key)) {
        this.setUpData[key].forEach((elem , index) => {

        //console.log ((elem.name.toLowerCase().includes(input.toLowerCase()) ))
        if (elem.name.toLowerCase().includes(input.toLowerCase()) ) {
             // есть название оставить элемент

             // проверить удаленные
/*
             for (var key1 in this.deletedSearh) {
                 if (this.deletedSearh.hasOwnProperty(key1)) {
                     this.deletedSearh[key1].forEach((elem1 , index1) => {

                     //console.log ((elem.name.toLowerCase().includes(input.toLowerCase()) ))
                     if (elem1.name.toLowerCase().includes(input.toLowerCase()) ) {
                          // есть название вернуть в отображение

                   } else {
                     let deletedObj1 = this.deletedSearh[key1].splice(index1 , 1)
                     this.setUpData[key1].push(deletedObj1[0])




                   }

                     });
                 }
             }
*/

      } else {
          console.log (index)

          // удалить элемент
      //let deletedObj = this.setUpData[key].splice(index , 1)
      //this.deletedSearh[key].push(deletedObj[0])




      //проверить удаленные на соответствие фразе и засунуть обратно элемент в отображение


      }

        });
    }
}


console.log (this.setUpData)
console.log (this.deletedSearh)




}

nameSelect(i, reg) {

console.log (this.setUpData[reg][i])


console.log (this.selectedObjs.indexOf (this.setUpData[reg][i]) )

  //this.selectedObjs.push (this.setUpData[reg][i])

if (this.selectedObjs.indexOf (this.setUpData[reg][i]) == -1 ){

  console.log ('ADD')

  this.selectedObjs.push (this.setUpData[reg][i])
  //this.selectedObjs[].splice ( ,1)
} else {
  console.log ('DEL')
  let elem = this.selectedObjs.indexOf (this.setUpData[reg][i])
  this.selectedObjs.splice (elem, 1)
}

/*
if (this.selectedObjs.indexOf (this.setUpData[reg][i] != -1) {

  this.selectedObjs.splice (this.selectedObjs.indexOf (this.setUpData[reg][i], 1)

} else {
  this.selectedObjs.push (this.setUpData[reg][i])
}
*/
console.log (this.selectedObjs)

}






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
    let selectedObjs = this.selectedObjs

    this.search.SearchFindBookingsObjsAtDb(serchData, selectedObjs).subscribe ((data)=> {

        //this.forDisplay = data.data
        console.log (data)

        this.showBokings = true

/*
        // dates days nights
        let dateCheckIn =  this.searchForm.get('dateCheckIn').value
        let dateCheckOut =  this.searchForm.get('dateCheckOut').value
        let inD = new Date (dateCheckIn).getTime ()
        let outD = new Date (dateCheckOut).getTime ()
        let oneDay = 24*60*60*1000;

        this.nights = (outD - inD) / oneDay
        this.days = this.nights+1
*/

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
