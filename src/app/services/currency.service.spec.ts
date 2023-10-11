import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyService } from './currency.service';

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
  });

  it('should be created', () => {
    const service: CurrencyService = TestBed.inject(CurrencyService);
    expect(service).toBeTruthy();
  });
});
