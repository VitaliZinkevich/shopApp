import { Component, OnInit, Inject } from '@angular/core';
import { Newobj, Main, Price, Accommodation, Address, Rooms,  adressOption, TYPES, accommodation, objFeatures, Description, objMedFeatures, ChildrenRange} from '../newobj'
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
objFeatures = objFeatures;
objMedFeatures = objMedFeatures

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
/*
fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        let headers = new Headers();
        /** In Angular 5, including the header Content-Type can invalidate your request */
        /*
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post(`${this.apiEndPoint}`, formData, options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}
*/


}
