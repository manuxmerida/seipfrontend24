import { TestBed } from '@angular/core/testing';

import { ArtserviceService } from './artservice.service';

describe('ArtserviceService', () => {
  let service: ArtserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
