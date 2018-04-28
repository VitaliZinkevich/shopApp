import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchForm: FormGroup;


  constructor( private  fb: FormBuilder ) {

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

}
