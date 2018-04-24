import { Component, OnInit, Inject } from '@angular/core';
import { Newobj, Main, Price, Accommodation, Address, Rooms,  adressOption, TYPES, accommodation} from '../newobj'
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

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


countryIndex : number = 0;
countrySelected = false;

regionIndex = 0
regionSelected = false


constructor(private  fb: FormBuilder) {
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
       rooms: fb.array ([]),

     });


}



ngOnInit() {}

get rooms(): FormArray {
  return this.form.get('rooms') as FormArray;
};

addRoom() {
  console.log ('add Room')
  this.rooms.push(this.fb.group(new Rooms ()));
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





}
