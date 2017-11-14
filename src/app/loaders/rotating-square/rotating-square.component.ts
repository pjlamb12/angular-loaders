import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ng-rotating-square',
  templateUrl: './rotating-square.component.html',
  styleUrls: ['./rotating-square.component.scss']
})
export class RotatingSquareComponent implements OnInit {
	@Input() spinnerColor: string;
  constructor() { }

  ngOnInit() {
  }

}
