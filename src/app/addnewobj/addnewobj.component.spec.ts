import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewobjComponent } from './addnewobj.component';

describe('AddnewobjComponent', () => {
  let component: AddnewobjComponent;
  let fixture: ComponentFixture<AddnewobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
