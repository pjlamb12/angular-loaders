import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RotatingSquareComponent } from './rotating-square/rotating-square.component';
import { PulsingCirclesComponent } from './pulsing-circles/pulsing-circles.component';
import { GrowingBarsComponent } from './growing-bars/growing-bars.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent, RotatingSquareComponent, PulsingCirclesComponent, GrowingBarsComponent],
  exports: [LoaderComponent]
})
export class LoadersModule { }
