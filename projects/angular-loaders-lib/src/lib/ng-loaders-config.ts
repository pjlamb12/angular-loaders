import { NgLoadersTypes } from './ng-loaders-types.enum';
export class NgLoadersConfig {
	color: string;
	type: string;

	constructor(obj: any = {}) {
		this.color = obj.color || 'black';
		this.type = obj.type || NgLoadersTypes.ROTATING_SQUARE;

		return this;
	}
}
