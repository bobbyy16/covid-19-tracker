import { TestBed } from '@angular/core/testing';

import { DataapigetService } from './dataapiget.service';

describe('DataapigetService', () => {
  let service: DataapigetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataapigetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
