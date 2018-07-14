import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ngx-ellipsis',
	templateUrl: './ellipsis.component.html',
	styleUrls: ['./ellipsis.component.scss'],
})
export class EllipsisComponent implements OnInit {
	@Input() spinnerColor: string;

	constructor() {}

	ngOnInit() {}
}
