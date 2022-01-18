import { TestBed } from '@angular/core/testing';

import { TambahdataService } from './tambahdata.service';

describe('TambahdataService', () => {
  let service: TambahdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TambahdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
