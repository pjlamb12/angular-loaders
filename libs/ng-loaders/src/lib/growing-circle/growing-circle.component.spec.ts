import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowingCircleComponent } from './growing-circle.component';
describe('GrowingCircleComponent', () => {
	let component: GrowingCircleComponent;
	let fixture: ComponentFixture<GrowingCircleComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GrowingCircleComponent],
		}).compileComponents();
		fixture = TestBed.createComponent(GrowingCircleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
