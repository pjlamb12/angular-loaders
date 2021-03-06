import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngx-growing-circle',
	templateUrl: './growing-circle.component.html',
	styleUrls: ['./growing-circle.component.scss'],
})
export class GrowingCircleComponent implements OnInit {
	@Input() spinnerColor: string;

	constructor() {}

	ngOnInit() {}
}
