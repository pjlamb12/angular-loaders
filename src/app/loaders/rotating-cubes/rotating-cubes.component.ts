import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-rotating-cubes',
  templateUrl: './rotating-cubes.component.html',
  styleUrls: ['./rotating-cubes.component.scss']
})
export class RotatingCubesComponent implements OnInit {
	@Input() spinnerColor: string;

  constructor() { }

  ngOnInit() {
  }

}
