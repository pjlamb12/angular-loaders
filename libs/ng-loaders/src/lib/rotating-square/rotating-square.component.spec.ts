import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotatingSquareComponent } from './rotating-square.component';

describe('RotatingSquareComponent', () => {
  let component: RotatingSquareComponent;
  let fixture: ComponentFixture<RotatingSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingSquareComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RotatingSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
