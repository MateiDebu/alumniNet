import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUserComponentComponent } from './profile-user-component.component';

describe('ProfileUserComponentComponent', () => {
  let component: ProfileUserComponentComponent;
  let fixture: ComponentFixture<ProfileUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
