import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({
  name: 'safeCssVar'
})
export class SafeCssVariablePipe implements PipeTransform {
	private _sanitizer;
	constructor(sanitizer: DomSanitizer){
        this._sanitizer = sanitizer;
    }

  transform(style: string): unknown {
    return this._sanitizer.bypassSecurityTrustStyle(style);
  }

}
