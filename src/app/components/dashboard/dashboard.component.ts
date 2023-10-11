import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { CurrencyService } from '../../services/currency.service';
import {
  CURRENCIES_MAPPER_INITIAL_STATE,
  Currency,
} from '../../models/currency';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currenciesMapper: Currency[] = CURRENCIES_MAPPER_INITIAL_STATE;

  isLoading: boolean = true;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurrencies();
    this.startCurrenciesUpdate();
  }

  getCurrencies(): void {
    this.currencyService.getCurrencies().subscribe({
      next: (apiData) => {
        this.currenciesMapper = this.currenciesMapper.map((currencyMapper) => {
          const currencyApi = apiData.find(
            (currency) => currencyMapper.code === currency.code,
          );

          if (!currencyApi) return currencyMapper;

          const { bid, pctChange, create_date } = currencyApi;
          return { ...currencyMapper, bid, pctChange, create_date };
        });

        this.isLoading = false;
      },
      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  getCurrency(code: string): void {
    this.currencyService.getCurrency(code).subscribe({
      next: (apiData) => {
        const currency = this.currenciesMapper.find(
          (currency) => currency.code === code,
        );

        if (!currency) return;

        const { bid, pctChange, create_date } = apiData;
        Object.assign(currency, { bid, pctChange, create_date });

        this.isLoading = false;
      },

      error: (error) => {
        console.error(error);
        this.isLoading = false;
      },
    });
  }

  startCurrenciesUpdate(): void {
    const THREE_MINUTES_IN_MILLISECONDS = 180000;
    interval(THREE_MINUTES_IN_MILLISECONDS)
      .pipe(
        switchMap(() =>
          this.currencyService.getCurrencies().pipe(
            catchError(() => {
              this.currenciesMapper = JSON.parse(
                JSON.stringify(CURRENCIES_MAPPER_INITIAL_STATE),
              );
              return [];
            }),
          ),
        ),
      )
      .subscribe();
  }
}
