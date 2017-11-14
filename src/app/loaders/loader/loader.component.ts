import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() spinnerType: string = 'rotating-square';
  @Input() spinnerColor: string;
  public spinnerTypes = {
	  rotatingSquare: 'rotating-square',
	  pulsingCircles: 'pulsing-circles',
	  growingBars: 'growing-bars',
	  rotatingCubes: 'rotating-cubes',
	  growingCircle: 'growing-circle',
	  ellipsis: 'ellipsis',
	  cubeGrid: 'cube-grid',
	  rotatingDots: 'rotating-dots'
  };
  constructor() { }

  ngOnInit() {
  }

}
