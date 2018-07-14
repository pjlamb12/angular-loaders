import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

const path = environment.production ? 'ng-loaders' : 'angular-loaders-lib';

import { NgLoadersModule } from 'ng-loaders';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { environment } from '../environments/environment.prod';

@NgModule({
	declarations: [AppComponent, NavigationComponent],
	imports: [BrowserModule, NgLoadersModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
