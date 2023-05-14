import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesUserComponentComponent } from './studies-user-component.component';

describe('StudiesUserComponentComponent', () => {
  let component: StudiesUserComponentComponent;
  let fixture: ComponentFixture<StudiesUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
