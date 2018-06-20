import { TestBed, async, inject } from '@angular/core/testing';

import { ViewJobGuard } from './view-job.guard';

describe('ViewJobGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewJobGuard]
    });
  });

  it('should ...', inject([ViewJobGuard], (guard: ViewJobGuard) => {
    expect(guard).toBeTruthy();
  }));
});
