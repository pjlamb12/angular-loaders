import { SafeCssVariablePipe } from './safe-css-variable.pipe';

describe('SafePipe', () => {
	let mockDomSanitizer;
  it('create an instance', () => {
    const pipe = new SafeCssVariablePipe(mockDomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
