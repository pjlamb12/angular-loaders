import { Component, OnInit, Input, Optional } from '@angular/core';
import { NgLoadersConfig } from '../ng-loaders-config';

@Component({
	selector: 'ngx-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
	@Input() spinnerType: string;
	@Input() spinnerColor: string;
	public spinnerTypes = {
		rotatingSquare: 'rotating-square',
		pulsingCircles: 'pulsing-circles',
		growingBars: 'growing-bars',
		rotatingCubes: 'rotating-cubes',
		growingCircle: 'growing-circle',
		ellipsis: 'ellipsis',
		cubeGrid: 'cube-grid',
		rotatingDots: 'rotating-dots',
	};
	constructor(@Optional() config: NgLoadersConfig) {
		this.spinnerColor = config.color;
		this.spinnerType = config.type;
	}

	ngOnInit() {}
}
