import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-rotating-dots',
  templateUrl: './rotating-dots.component.html',
  styleUrls: ['./rotating-dots.component.scss'],
})
export class RotatingDotsComponent implements OnInit {
  @Input() spinnerColor: string;

  constructor() {}

  ngOnInit() {}
}
