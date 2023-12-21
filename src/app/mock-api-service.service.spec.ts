import { TestBed } from '@angular/core/testing';

import { MockApiServiceService } from './mock-api-service.service';

describe('MockApiServiceService', () => {
  let service: MockApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
