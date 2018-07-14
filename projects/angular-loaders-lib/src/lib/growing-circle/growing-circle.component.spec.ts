import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingCircleComponent } from './growing-circle.component';

describe('GrowingCircleComponent', () => {
  let component: GrowingCircleComponent;
  let fixture: ComponentFixture<GrowingCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingCircleComponent ]
    })
    .compileComponents();
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
