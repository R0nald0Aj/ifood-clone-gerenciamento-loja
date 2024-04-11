import { TestBed } from '@angular/core/testing';

import { ReaderFileService } from './reader-file.service';

describe('ReaderFileService', () => {
  let service: ReaderFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
