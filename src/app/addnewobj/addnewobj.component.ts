import { Component, OnInit, Inject, AfterViewInit, ViewChildren,QueryList, ElementRef } from '@angular/core';
import { Newobj, Main, Price, Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

import { AddService } from '../add.service'

interface privateDomValues {
    _result:any;
}

@Component({
  selector: 'app-addnewobj',
  templateUrl: './addnewobj.component.html',
  styleUrls: ['./addnewobj.component.css']
})
export class AddnewobjComponent implements AfterViewInit {
@ViewChildren('childerRanges') agesElem : QueryList<any>;
@ViewChildren('roomsAtObject') roomsElem: QueryList<any>;

form: FormGroup;
acc = accommodation;
type = TYPES;
adressList = adressOption;
objFeatures = objFeatures;
objMedFeatures = objMedFeatures;

countryIndex : number = 0;
countrySelected = false;

regionIndex = 0
regionSelected = false

childrenPrice: any = [[],[],[]]

constructor(private  fb: FormBuilder,
            private add: AddService) {
  this.form = fb.group({
       main: fb.group({
         title: ['', Validators.required],
         type: '',

       }),
       adress: fb.group({
         country: '',
         region: '',
         area: '',
         place: ''
       }),
       priceType: '',
       childrenRange: fb.array ([]),
       rooms: fb.array ([]),
       description: fb.array ([]),
       medDescription: fb.array ([]),


     });


}



ngAfterViewInit () {



}




get rooms(): FormArray {
  return this.form.get('rooms') as FormArray;
};





addRoom() {



let range = this.fb.group({

price: 0

})





  this.rooms.push(this.fb.group({
    roomname:  '',
    adultPrice: '',
    childrenPrice: '',//this.fb.array ([]),
    accommodation : '' ,




  }));
/*  console.log (this.roomsElem)
  this.roomsElem._results.forEach (e=>{
    e.nativeElement.disabled = true
  })*/

}


/*
  get childrenPrice(): FormArray {
    return this.form.get('childrenPrice') as FormArray;
  }
*/
/*
  addChildrenPrice (){


//console.log (this.form.get('childrenPrice').value)
/*
  this.childrenPrice.push (this.fb.group({
      price:  ''})

  )

}*/






get description(): FormArray {
  return this.form.get('description') as FormArray;
};


addDescription (){

this.description.push(this.fb.group(new Description ()));

}

get medDescription(): FormArray {
  return this.form.get('medDescription') as FormArray;
};

get childrenRange(): FormArray {
  return this.form.get('childrenRange') as FormArray;
};

addChildrenRange() {



  this.childrenRange.push(this.fb.group(new ChildrenRange ()));

  /*let inp = this.agesElem._results

  inp.forEach (e=>{
    e.nativeElement.disabled = true
  })*/
/*
  if (this.childrenRange.length > 1) {
    let inputs = this.agesElem.querySelector ('input')
    console.log (inputs)
  }*/
}



addMedDescription (){

this.medDescription.push(this.fb.group(new Description ()));

}


checkCountry(event){

  let elementPos = this.adressList.map(function(x) {return x.country }).indexOf(event);
  this.countryIndex = elementPos;
  this.countrySelected = true

}

checkRegion(event){

  let elementPos = this.adressList[this.countryIndex].regions.map(function(x) {
    console.log (x.region)
    return x.region }).indexOf(event);

  this.regionIndex = elementPos;
  this.regionSelected = true

}

addNewBookingObject (){
  let formData = this.form.value

  this.add.addBookingObject (formData).subscribe ((data)=> {console.log (data)})
}

}
