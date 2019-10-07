import { TestBed } from '@angular/core/testing';

import { JsonFormatService } from './json-format.service';

describe('JsonFormatService', () => {
  let service: JsonFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
