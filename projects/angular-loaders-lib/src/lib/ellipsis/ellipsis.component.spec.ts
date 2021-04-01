import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EllipsisComponent } from './ellipsis.component';

describe('EllipsisComponent', () => {
  let component: EllipsisComponent;
  let fixture: ComponentFixture<EllipsisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
