import { Component, OnInit } from '@angular/core';
import { Newobj, Address, countries ,regions} from '../newobj'

@Component({
  selector: 'app-addnewobj',
  templateUrl: './addnewobj.component.html',
  styleUrls: ['./addnewobj.component.css']
})
export class AddnewobjComponent implements OnInit {


  types = ['Санаторий', 'Оздаровительный центр'];
  areaIndex: number;
  areaDiv: boolean;
  adresses= regions;
  contry = countries;


  adress = new Address ('','','','')
  model = new Newobj('', '', this.adress);


   submitted = false;

   onSubmit() { this.submitted = true; }

   setNewObject() {
     console.log(this.model)
     //this.model = new Newobj('', '', []);
   }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.model); }



  constructor() { }

  ngOnInit() {
  }



checkIndex = function (event) {

      let elementPos = this.adresses.map(function(x) {return x.name }).indexOf(event);
      console.log(elementPos)
      this.areaIndex = elementPos;
      this.areaDiv = true;


}


}
