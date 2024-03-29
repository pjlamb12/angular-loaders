import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EllipsisComponent } from './ellipsis.component';

describe('EllipsisComponent', () => {
  let component: EllipsisComponent;
  let fixture: ComponentFixture<EllipsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EllipsisComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
