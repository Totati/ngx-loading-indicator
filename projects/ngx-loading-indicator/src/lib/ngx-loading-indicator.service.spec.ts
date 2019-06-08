import { TestBed } from '@angular/core/testing';

import { NgxLoadingIndicatorService } from './ngx-loading-indicator.service';

describe('NgxLoadingIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxLoadingIndicatorService = TestBed.get(NgxLoadingIndicatorService);
    expect(service).toBeTruthy();
  });
});
