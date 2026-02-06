import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GrowingBarsComponent } from './growing-bars.component';
describe('GrowingBarsComponent', () => {
	let component: GrowingBarsComponent;
	let fixture: ComponentFixture<GrowingBarsComponent>;
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [GrowingBarsComponent],
		}).compileComponents();
		fixture = TestBed.createComponent(GrowingBarsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
