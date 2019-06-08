import { TestBed } from '@angular/core/testing';

import { NgxBarIndicatorService } from './ngx-bar-indicator.service';

describe('NgxBarIndicatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxBarIndicatorService = TestBed.get(NgxBarIndicatorService);
    expect(service).toBeTruthy();
  });
});
