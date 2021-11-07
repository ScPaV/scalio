import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPostComponent } from './load-post.component';

describe('LoadPostComponent', () => {
  let component: LoadPostComponent;
  let fixture: ComponentFixture<LoadPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
