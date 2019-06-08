import { TestBed } from '@angular/core/testing';

import { NgxSpinnerIndicatorService } from './ngx-spinner-indicator.service';

describe('NgxSpinnerIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSpinnerIndicatorService = TestBed.get(NgxSpinnerIndicatorService);
    expect(service).toBeTruthy();
  });
});
