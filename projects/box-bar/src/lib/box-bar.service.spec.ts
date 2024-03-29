import { TestBed } from '@angular/core/testing';

import { BoxBarService } from './box-bar.service';

describe('BoxBarService', () => {
  let service: BoxBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
