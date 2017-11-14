import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { RotatingSquareComponent } from './rotating-square/rotating-square.component';
import { PulsingCirclesComponent } from './pulsing-circles/pulsing-circles.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoaderComponent, RotatingSquareComponent, PulsingCirclesComponent],
  exports: [LoaderComponent]
})
export class LoadersModule { }
