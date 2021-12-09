import { TestBed } from '@angular/core/testing';

import { MonServiceService } from './mon-service.service';

describe('MonServiceService', () => {
  let service: MonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
