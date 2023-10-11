import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { CurrencyCardComponent } from '../currency-card/currency-card.component';
import { CurrencyService } from '../../services/currency.service';

import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

registerLocaleData(pt);

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let currencyService: CurrencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [DashboardComponent, CurrencyCardComponent],
      providers: [CurrencyService],
    });

    currencyService = TestBed.inject(CurrencyService);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display loading state', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loaderElement = fixture.nativeElement.querySelector('.card__loader');
    expect(loaderElement).toBeTruthy();
  });

  it('should display currency data after loading', () => {
    component.isLoading = false;
    component.currenciesMapper = [
      {
        code: 'USD',
        name: 'US Dollar',
        bid: 3.7148,
        pctChange: -0.16,
        create_date: '2023-10-11 11:52:17',
      },
    ];
    fixture.detectChanges();
    const cardTitleElement =
      fixture.nativeElement.querySelector('.card__title');
    expect(cardTitleElement.textContent).toContain('US Dollar');
  });
});
