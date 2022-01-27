import { TestBed } from '@angular/core/testing';

import { NetlifyDataService } from './netlify-data.service';

describe('NetlifyDataService', () => {
  let service: NetlifyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetlifyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
