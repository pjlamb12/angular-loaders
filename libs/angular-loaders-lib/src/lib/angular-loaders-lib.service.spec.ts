import { TestBed, inject } from '@angular/core/testing';

import { AngularLoadersLibService } from './angular-loaders-lib.service';

describe('AngularLoadersLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularLoadersLibService],
    });
  });

  it('should be created', inject(
    [AngularLoadersLibService],
    (service: AngularLoadersLibService) => {
      expect(service).toBeTruthy();
    }
  ));
});
