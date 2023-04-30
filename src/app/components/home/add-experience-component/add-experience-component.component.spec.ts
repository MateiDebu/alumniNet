import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExperienceComponentComponent } from './add-experience-component.component';

describe('AddExperienceComponentComponent', () => {
  let component: AddExperienceComponentComponent;
  let fixture: ComponentFixture<AddExperienceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExperienceComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExperienceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
