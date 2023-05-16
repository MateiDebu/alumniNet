import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsControlComponentComponent } from './posts-control-component.component';

describe('PostsControlComponentComponent', () => {
  let component: PostsControlComponentComponent;
  let fixture: ComponentFixture<PostsControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsControlComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
