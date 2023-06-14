import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgLoadersModule, NgLoadersTypes } from 'angular-loaders-lib';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    NgLoadersModule.forRoot({
      color: 'red',
      type: NgLoadersTypes.PULSING_CIRCLES,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
