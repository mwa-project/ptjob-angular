import { TestBed, inject } from '@angular/core/testing';

import { PtjobService } from './ptjob.service';

describe('PtjobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PtjobService]
    });
  });

  it('should be created', inject([PtjobService], (service: PtjobService) => {
    expect(service).toBeTruthy();
  }));
});
