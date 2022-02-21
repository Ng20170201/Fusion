import { TestBed } from '@angular/core/testing';

import { BitServiceService } from './bit-service.service';

describe('BitServiceService', () => {
  let service: BitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
