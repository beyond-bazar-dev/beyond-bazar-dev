import { TestBed } from '@angular/core/testing';

import { ScreenMeasureServiceService } from './screen-measure-service.service';

describe('ScreenMeasureServiceService', () => {
  let service: ScreenMeasureServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenMeasureServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
