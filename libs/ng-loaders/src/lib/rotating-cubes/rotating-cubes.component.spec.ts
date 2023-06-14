import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RotatingCubesComponent } from './rotating-cubes.component';

describe('RotatingCubesComponent', () => {
  let component: RotatingCubesComponent;
  let fixture: ComponentFixture<RotatingCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotatingCubesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RotatingCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
