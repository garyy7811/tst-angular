import { TestBed } from '@angular/core/testing';

import { HeroSVCService } from './hero-svc.service';

describe('HeroSVCService', () => {
  let service: HeroSVCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroSVCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
