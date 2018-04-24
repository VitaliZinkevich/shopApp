import { Component, OnInit, Inject } from '@angular/core';
import { Newobj, Address, Rooms, countries ,regions, TYPES} from '../newobj'
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-addnewobj',
  templateUrl: './addnewobj.component.html',
  styleUrls: ['./addnewobj.component.css']
})
export class AddnewobjComponent implements OnInit {

form: FormGroup;


constructor(private  fb: FormBuilder) {
  this.form = fb.group({
       main: fb.group({
         title: ['Название', Validators.required],
         type: '',

       }),
       adress: fb.group({
         country: '',
         region: '',
         area: '',
         place: ''
       }),
       priceType: '',
       /*rooms: fb.array ([{
               'roomname': '',
               price: fb.group({
                 'adult': '',
                 'children': '',
               }]),*/
               /*accommodation: fb.array ([{
                 'valid':'',
               }])*/


       })
     }


/*
  this.form = fb.group({
       main: fb.group({
         title: ['Название', Validators.required],
         type: '',

       }),
       adress: fb.group({
         country: '',
         region: '',
         area: '',
         place: ''
       }),
       priceType: '',
       rooms: fb.array ([{
               'roomname': '',
               price: fb.group({
                 'adult': '',
                 'children': '',
               }]),
               accommodation: fb.array ([{
                 'valid':'',
               }])


       })
     });

*/




ngOnInit() {


          }


}
