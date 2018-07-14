import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulsingCirclesComponent } from './pulsing-circles.component';

describe('PulsingCirclesComponent', () => {
  let component: PulsingCirclesComponent;
  let fixture: ComponentFixture<PulsingCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulsingCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsingCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
