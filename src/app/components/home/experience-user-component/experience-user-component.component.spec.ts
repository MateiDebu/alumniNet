import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceUserComponentComponent } from './experience-user-component.component';

describe('ExperienceUserComponentComponent', () => {
  let component: ExperienceUserComponentComponent;
  let fixture: ComponentFixture<ExperienceUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
