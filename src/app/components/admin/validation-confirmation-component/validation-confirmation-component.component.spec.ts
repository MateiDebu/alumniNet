import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationConfirmationComponentComponent } from './validation-confirmation-component.component';

describe('ValidationConfirmationComponentComponent', () => {
  let component: ValidationConfirmationComponentComponent;
  let fixture: ComponentFixture<ValidationConfirmationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationConfirmationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationConfirmationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
