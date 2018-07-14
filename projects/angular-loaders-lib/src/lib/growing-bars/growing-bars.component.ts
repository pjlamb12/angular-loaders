import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngx-growing-bars',
	templateUrl: './growing-bars.component.html',
	styleUrls: ['./growing-bars.component.scss'],
})
export class GrowingBarsComponent implements OnInit {
	@Input() spinnerColor: string;

	constructor() {}

	ngOnInit() {}
}
