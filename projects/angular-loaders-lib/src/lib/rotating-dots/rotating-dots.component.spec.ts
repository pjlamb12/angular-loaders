import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RotatingDotsComponent } from './rotating-dots.component';

describe('RotatingDotsComponent', () => {
  let component: RotatingDotsComponent;
  let fixture: ComponentFixture<RotatingDotsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingDotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
