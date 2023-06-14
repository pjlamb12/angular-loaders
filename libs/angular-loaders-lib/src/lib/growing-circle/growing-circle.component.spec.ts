import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrowingCircleComponent } from './growing-circle.component';

describe('GrowingCircleComponent', () => {
  let component: GrowingCircleComponent;
  let fixture: ComponentFixture<GrowingCircleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GrowingCircleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
