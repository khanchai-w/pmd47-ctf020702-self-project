import { TestBed } from '@angular/core/testing';

import { DrungService } from './drung.service';

describe('DrungService', () => {
  let service: DrungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
