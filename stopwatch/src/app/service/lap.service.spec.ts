import { TestBed } from '@angular/core/testing';

import { LapService } from './lap.service';

describe('LapService', () => {
  let service: LapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
