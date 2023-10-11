import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Currency } from '../../currency';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss'],
})
export class CurrencyCardComponent {
  @Input() currencyDetails: Currency = {
    code: '',
    name: '',
  };
  @Input() isLoading: boolean = false;
  @Output() reload = new EventEmitter();

  constructor() {}

  getModifierClassForCurrencyValue(currencyValue: number): string {
    if (currencyValue <= 1) return '--color-red';
    if (currencyValue > 1 && currencyValue <= 5) return '--color-green';
    return '--color-blue';
  }

  getCurrencyLastUpdated(createDate: string): string {
    const currencyCreateDate = createDate.split(' ');
    const lastUpdateTime = currencyCreateDate[1];
    return lastUpdateTime;
  }
}
