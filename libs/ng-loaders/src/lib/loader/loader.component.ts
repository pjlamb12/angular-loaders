import {
	NgClass,
	NgIf,
	NgSwitch,
	NgSwitchCase,
	NgSwitchDefault,
} from '@angular/common';
import { Component, Input } from '@angular/core';
import { RotatingCubesComponent } from '../rotating-cubes/rotating-cubes.component';
import { CubeGridComponent } from '../cube-grid/cube-grid.component';
import { EllipsisComponent } from '../ellipsis/ellipsis.component';
import { GrowingBarsComponent } from '../growing-bars/growing-bars.component';
import { GrowingCircleComponent } from '../growing-circle/growing-circle.component';
import { PulsingCirclesComponent } from '../pulsing-circles/pulsing-circles.component';
import { RotatingDotsComponent } from '../rotating-dots/rotating-dots.component';
import { RotatingSquareComponent } from '../rotating-square/rotating-square.component';

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
	standalone: true,
	imports: [
		NgIf,
		NgClass,
		NgSwitch,
		NgSwitchCase,
		NgSwitchDefault,
		RotatingCubesComponent,
		CubeGridComponent,
		EllipsisComponent,
		GrowingBarsComponent,
		GrowingCircleComponent,
		PulsingCirclesComponent,
		RotatingDotsComponent,
		RotatingSquareComponent,
	],
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
	@Input({ required: true }) spinnerType!: SpinnerType;
	@Input() coverContainer = false;
	@Input() fixed: boolean = false;
	@Input() overlayColor = '#ffffff';
	@Input() overlayOpacity = 0.5;

	constructor() {}
}
