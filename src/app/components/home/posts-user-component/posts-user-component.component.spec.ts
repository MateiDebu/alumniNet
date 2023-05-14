import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUserComponentComponent } from './posts-user-component.component';

describe('PostsUserComponentComponent', () => {
  let component: PostsUserComponentComponent;
  let fixture: ComponentFixture<PostsUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
