import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulsingCirclesComponent } from './pulsing-circles.component';

describe('PulsingCirclesComponent', () => {
  let component: PulsingCirclesComponent;
  let fixture: ComponentFixture<PulsingCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulsingCirclesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PulsingCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
