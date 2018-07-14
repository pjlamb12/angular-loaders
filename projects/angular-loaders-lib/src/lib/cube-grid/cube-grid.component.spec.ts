import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeGridComponent } from './cube-grid.component';

describe('CubeGridComponent', () => {
  let component: CubeGridComponent;
  let fixture: ComponentFixture<CubeGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
