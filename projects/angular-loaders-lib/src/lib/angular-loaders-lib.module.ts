import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { RotatingSquareComponent } from './rotating-square/rotating-square.component';
import { PulsingCirclesComponent } from './pulsing-circles/pulsing-circles.component';
import { GrowingBarsComponent } from './growing-bars/growing-bars.component';
import { RotatingCubesComponent } from './rotating-cubes/rotating-cubes.component';
import { GrowingCircleComponent } from './growing-circle/growing-circle.component';
import { EllipsisComponent } from './ellipsis/ellipsis.component';
import { CubeGridComponent } from './cube-grid/cube-grid.component';
import { RotatingDotsComponent } from './rotating-dots/rotating-dots.component';
import { NgLoadersConfig } from './ng-loaders-config';
import { SafeCssVariablePipe } from './safe-css-variable.pipe';

@NgModule({
	imports: [CommonModule],
	declarations: [
		LoaderComponent,
		RotatingSquareComponent,
		PulsingCirclesComponent,
		GrowingBarsComponent,
		RotatingCubesComponent,
		GrowingCircleComponent,
		EllipsisComponent,
		CubeGridComponent,
		RotatingDotsComponent,
		SafeCssVariablePipe
	],
	exports: [LoaderComponent],
})
export class NgLoadersModule {
	static forRoot(config: NgLoadersConfig): ModuleWithProviders<NgLoadersModule> {
		return {
			ngModule: NgLoadersModule,
			providers: [{ provide: NgLoadersConfig, useValue: config }],
		};
	}
}
