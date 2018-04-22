import { Component, OnInit, Inject } from '@angular/core';
import { Newobj, Address, Rooms, countries ,regions, TYPES} from '../newobj'
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addnewobj',
  templateUrl: './addnewobj.component.html',
  styleUrls: ['./addnewobj.component.css']
})
export class AddnewobjComponent implements OnInit {

myform: FormGroup;



orderForm: FormGroup;
items: any[] = [];




areaIndex:number;
areaDiv = false;

types = TYPES;
adresses= regions;
contry = countries;

constructor(private  formBuilder: FormBuilder) { }

ngOnInit() {

      this.myform = new FormGroup({
        name: new FormControl(),
        type: new FormControl(),
        country: new FormControl(),
        adress: new FormGroup ({
          regions: new FormControl(),
          area: new FormControl(),
          place: new FormControl(),
        }),


          })

          this.orderForm = this.formBuilder.group({
            customerName: '',
            email: '',
            items: this.formBuilder.array([ this.createItem() ])
          });

}

checkRegion(event){

  let elementPos = this.adresses.map(function(x) {return x.name }).indexOf(event);
  this.areaIndex = elementPos;
  this.areaDiv = true;

}

createItem(): FormGroup {
  return this.formBuilder.group({
   name: new FormControl(),
   description: new FormControl(),
   price: new FormControl()
  });
}

addItem(): void {
  this.items = this.orderForm.get('items') as FormArray;
  let x = this.createItem()
  this.items.push(this.createItem());

  console.log (this.orderForm.controls.items.controls[0].controls.name.value)
}

/*



  areaIndex: number;
  areaDiv: boolean;
  adresses= regions;
  contry = countries;




  room = new Rooms ('', '' , 0)
  adress = new Address ('','','','')
  model = new Newobj('', '', this.adress, [this.room]);


   submitted = false;

   onSubmit() {
     //console.log(newObjForm)
     this.submitted = true; }

   setNewObject() {
     console.log(this.model)
     //this.model = new Newobj('', '', []);
   }

   //  Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }







checkIndex = function (event) {

      let elementPos = this.adresses.map(function(x) {return x.name }).indexOf(event);
      console.log(elementPos)
      this.areaIndex = elementPos;
      this.areaDiv = true;


}

*/


}
