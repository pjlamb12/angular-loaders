import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RotatingCubesComponent } from './rotating-cubes.component';

describe('RotatingCubesComponent', () => {
  let component: RotatingCubesComponent;
  let fixture: ComponentFixture<RotatingCubesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RotatingCubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
