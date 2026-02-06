import { NgClass, NgComponentOutlet } from '@angular/common';
import { Component, Injector, Input } from '@angular/core';
import { RotatingCubesComponent } from '../rotating-cubes/rotating-cubes.component';
import { CubeGridComponent } from '../cube-grid/cube-grid.component';
import { EllipsisComponent } from '../ellipsis/ellipsis.component';
import { GrowingBarsComponent } from '../growing-bars/growing-bars.component';
import { GrowingCircleComponent } from '../growing-circle/growing-circle.component';
import { PulsingCirclesComponent } from '../pulsing-circles/pulsing-circles.component';
import { RotatingDotsComponent } from '../rotating-dots/rotating-dots.component';
import { RotatingSquareComponent } from '../rotating-square/rotating-square.component';
import { NG_LOADERS_CONFIG, NgLoadersConfig } from '../injection-token';

export type SpinnerType =
	| 'cube-grid'
	| 'ellipsis'
	| 'growing-bars'
	| 'growing-circle'
	| 'pulsing-circles'
	| 'rotating-cubes'
	| 'rotating-dots'
	| 'rotating-square';

@Component({
    selector: 'ngx-loader',
    imports: [
    NgClass,
    NgComponentOutlet
],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	private config: NgLoadersConfig = this._injector.get(NG_LOADERS_CONFIG);
	@Input() spinnerType: SpinnerType = this.config.spinnerType;
	@Input() coverContainer = false;
	@Input() fixed: boolean = false;
	componentsMap = {
		'cube-grid': CubeGridComponent,
		ellipsis: EllipsisComponent,
		'growing-bars': GrowingBarsComponent,
		'growing-circle': GrowingCircleComponent,
		'pulsing-circles': PulsingCirclesComponent,
		'rotating-cubes': RotatingCubesComponent,
		'rotating-dots': RotatingDotsComponent,
		'rotating-square': RotatingSquareComponent,
	};

	constructor(private _injector: Injector) {}
}
