import { Component } from '@angular/core';
import { LoaderComponent, SpinnerType } from 'ng-loaders';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith, tap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';

@Component({
	standalone: true,
	imports: [
		NxWelcomeComponent,
		LoaderComponent,
		NgIf,
		AsyncPipe,
		ReactiveFormsModule,
		NgFor,
		UpperCasePipe,
	],
	selector: 'angular-loaders-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	spinnerTypeOptions: SpinnerType[] = [
		'cube-grid',
		'ellipsis',
		'growing-bars',
		'growing-circle',
		'pulsing-circles',
		'rotating-cubes',
		'rotating-dots',
		'rotating-square',
	];
	colorOptions = ['red', 'blue', 'yellow'];
	public spinnerDemoForm = this._fb.group({
		spinnerType: ['cube-grid'],
		spinnerColor: ['red'],
	});

	public formValues$: Observable<{
		spinnerColor: string;
		spinnerType: SpinnerType;
	}> = this.spinnerDemoForm.valueChanges.pipe(
		startWith(this.spinnerDemoForm.value),
		map(({ spinnerColor, spinnerType }) => {
			return {
				spinnerColor: spinnerColor || 'red',
				spinnerType: (spinnerType || 'cube-grid') as SpinnerType,
			};
		}),
		tap(({ spinnerColor }) => {
			// set the css custom property of spinnerColor
			document.documentElement.style.setProperty(
				'--spinnerColor',
				spinnerColor as string
			);
		})
	);

	constructor(private _fb: FormBuilder) {}
}
