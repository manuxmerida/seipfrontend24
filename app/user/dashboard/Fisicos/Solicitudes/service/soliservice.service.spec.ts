import { TestBed } from '@angular/core/testing';

import { SoliserviceService } from './soliservice.service';

describe('SoliserviceService', () => {
  let service: SoliserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoliserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
