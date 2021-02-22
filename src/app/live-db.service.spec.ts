import { TestBed } from '@angular/core/testing';

import { LiveDbService } from './live-db.service';

describe('LiveDbService', () => {
  let service: LiveDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
