import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GrowingBarsComponent } from './growing-bars.component';

describe('GrowingBarsComponent', () => {
  let component: GrowingBarsComponent;
  let fixture: ComponentFixture<GrowingBarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GrowingBarsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
