import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotatingDotsComponent } from './rotating-dots.component';

describe('RotatingDotsComponent', () => {
  let component: RotatingDotsComponent;
  let fixture: ComponentFixture<RotatingDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingDotsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RotatingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
