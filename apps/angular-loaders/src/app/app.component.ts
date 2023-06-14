import { Component } from '@angular/core';
import { LoaderComponent } from 'ng-loaders';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
	standalone: true,
	imports: [NxWelcomeComponent, LoaderComponent],
	selector: 'angular-loaders-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-loaders';
}
