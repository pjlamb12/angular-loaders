import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RotatingSquareComponent } from './rotating-square.component';

describe('RotatingSquareComponent', () => {
  let component: RotatingSquareComponent;
  let fixture: ComponentFixture<RotatingSquareComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
