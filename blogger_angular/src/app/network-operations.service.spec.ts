import { TestBed, inject } from '@angular/core/testing';

import { NetworkOperationsService } from './network-operations.service';

describe('NetworkOperationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkOperationsService]
    });
  });

  it('should be created', inject([NetworkOperationsService], (service: NetworkOperationsService) => {
    expect(service).toBeTruthy();
  }));
});
