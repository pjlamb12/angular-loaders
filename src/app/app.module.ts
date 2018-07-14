import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularLoadersLibModule } from 'angular-loaders-lib';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AngularLoadersLibModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
