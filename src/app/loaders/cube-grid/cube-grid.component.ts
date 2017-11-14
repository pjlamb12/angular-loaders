import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-cube-grid',
  templateUrl: './cube-grid.component.html',
  styleUrls: ['./cube-grid.component.scss']
})
export class CubeGridComponent implements OnInit {
	@Input() spinnerColor: string;

  constructor() { }

  ngOnInit() {
  }

}
