import { TestBed } from '@angular/core/testing';

import { NewsAPIserviceService } from './news-apiservice.service';

describe('NewsAPIserviceService', () => {
  let service: NewsAPIserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsAPIserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
