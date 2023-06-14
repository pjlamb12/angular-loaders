import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-pulsing-circles',
  templateUrl: './pulsing-circles.component.html',
  styleUrls: ['./pulsing-circles.component.scss'],
})
export class PulsingCirclesComponent implements OnInit {
  @Input() spinnerColor: string;
  constructor() {}

  ngOnInit() {}
}
