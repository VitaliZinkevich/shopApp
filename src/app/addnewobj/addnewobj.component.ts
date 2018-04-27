import { Component, OnInit, Inject } from '@angular/core';
import { Newobj, Main, /*Price,*/ Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

import { AddService } from '../add.service'

@Component({
  selector: 'app-addnewobj',
  templateUrl: './addnewobj.component.html',
  styleUrls: ['./addnewobj.component.css']
})
export class AddnewobjComponent implements OnInit {

form: FormGroup;
acc = accommodation;
type = TYPES;
adressList = adressOption;
objFeatures = objFeatures;
objMedFeatures = objMedFeatures

countryIndex : number = 0;
countrySelected = false;

regionIndex = 0
regionSelected = false


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



ngOnInit() {}




get rooms(): FormArray {
  return this.form.get('rooms') as FormArray;
};

addRoom() {
/*
  console.log (this.form.get('childrenRange').length) // works
  let priceRanges = this.form.get('childrenRange').value // works
*/

  this.rooms.push(this.fb.group(new Rooms ()));

}



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
return this.add.addBookingObject ()
}

}
