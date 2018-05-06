import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookObjectComponent } from './book-object.component';

describe('BookObjectComponent', () => {
  let component: BookObjectComponent;
  let fixture: ComponentFixture<BookObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
