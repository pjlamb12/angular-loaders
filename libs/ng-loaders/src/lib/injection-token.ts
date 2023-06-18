import { InjectionToken } from '@angular/core';
import { SpinnerType } from './loader/loader.component';

export interface NgLoadersConfig {
	spinnerType: SpinnerType;
}

export const NG_LOADERS_CONFIG = new InjectionToken<NgLoadersConfig>(
	'NG_LOADERS_CONFIG',
	{ providedIn: 'root', factory: () => ({ spinnerType: 'cube-grid' }) }
);
