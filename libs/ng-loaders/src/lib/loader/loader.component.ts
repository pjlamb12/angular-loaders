import { NgClass, NgComponentOutlet } from '@angular/common';
import { Component, Injector, inject, input } from '@angular/core';
import { RotatingCubesComponent } from '../rotating-cubes/rotating-cubes.component';
import { CubeGridComponent } from '../cube-grid/cube-grid.component';
import { EllipsisComponent } from '../ellipsis/ellipsis.component';
import { GrowingBarsComponent } from '../growing-bars/growing-bars.component';
import { GrowingCircleComponent } from '../growing-circle/growing-circle.component';
import { PulsingCirclesComponent } from '../pulsing-circles/pulsing-circles.component';
import { RotatingDotsComponent } from '../rotating-dots/rotating-dots.component';
import { RotatingSquareComponent } from '../rotating-square/rotating-square.component';
import { NG_LOADERS_CONFIG } from '../injection-token';

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
	imports: [NgClass, NgComponentOutlet],
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
	private config = inject(NG_LOADERS_CONFIG);
	public injector = inject(Injector);

	spinnerType = input<SpinnerType>(this.config.spinnerType);
	coverContainer = input(false);
	fixed = input(false);

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
}
