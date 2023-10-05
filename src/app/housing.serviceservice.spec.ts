import { TestBed } from '@angular/core/testing';

import { HousingServiceService } from './housingservice.service';

describe('HousingServiceService', () => {
  let service: HousingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
