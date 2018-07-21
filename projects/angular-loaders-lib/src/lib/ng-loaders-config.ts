export class NgLoadersConfig {
	color: string;
	type: string;

	constructor(obj: any = {}) {
		this.color = obj.color || 'black';
		this.type = obj.type || 'rotating-square';

		return this;
	}
}
