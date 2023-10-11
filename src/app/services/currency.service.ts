import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CacheService } from './cache.service';
import { Currency } from '../models/currency';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private THREE_MINUTES_IN_MILLISECONDS = 180000;
  private CURRENCIES_STORAGE_KEY = 'currencies';
  private urlParams = 'CAD-BRL,ARS-BRL,GBP-BRL';
  private currenciesUrl = `${environment.apiUrl}/${this.urlParams}`;

  constructor(
    private http: HttpClient,
    private cacheService: CacheService,
  ) {}

  getCurrencies(): Observable<Currency[]> {
    const currenciesFromCache = this.cacheService.getLocalStorageWithExpiry(
      this.CURRENCIES_STORAGE_KEY,
    );

    if (currenciesFromCache) return of(currenciesFromCache.value);

    const currenciesFromApi = this.http
      .get<Currency[]>(this.currenciesUrl)
      .pipe(
        map((data) => Object.values(data)),
        tap((data) => {
          this.cacheService.setLocalStorageWithExpiry(
            this.CURRENCIES_STORAGE_KEY,
            data,
            this.THREE_MINUTES_IN_MILLISECONDS,
          );
        }),
        catchError((error) => {
          console.error(error);
          throw new Error();
        }),
      );

    return currenciesFromApi;
  }

  getCurrency(currencyCode: string): Observable<Currency> {
    const apiUrl = `${environment.apiUrl}/${currencyCode}-BRL`;

    return this.http.get<Currency>(apiUrl).pipe(
      map((data: Currency) => Object.values(data).shift()),
      tap((data) => {
        this.cacheService.updateLocalStorage(
          this.CURRENCIES_STORAGE_KEY,
          data,
          this.THREE_MINUTES_IN_MILLISECONDS,
        );
      }),
      catchError((error) => {
        console.error(error);
        throw new Error();
      }),
    );
  }
}
