import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleConfirmationComponentComponent } from './detele-confirmation-component.component';

describe('DeteleConfirmationComponentComponent', () => {
  let component: DeteleConfirmationComponentComponent;
  let fixture: ComponentFixture<DeteleConfirmationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeteleConfirmationComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeteleConfirmationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
