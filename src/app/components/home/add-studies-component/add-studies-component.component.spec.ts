import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudiesComponentComponent } from './add-studies-component.component';

describe('AddStudiesComponentComponent', () => {
  let component: AddStudiesComponentComponent;
  let fixture: ComponentFixture<AddStudiesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudiesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
