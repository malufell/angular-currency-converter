import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCardComponent } from './currency-card.component';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyCardComponent],
    });
    fixture = TestBed.createComponent(CurrencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct modifier class for currency value', () => {
    expect(component.getModifierClassForCurrencyValue(0)).toBe('--color-red');
    expect(component.getModifierClassForCurrencyValue(1)).toBe('--color-red');
    expect(component.getModifierClassForCurrencyValue(2)).toBe('--color-green');
    expect(component.getModifierClassForCurrencyValue(6)).toBe('--color-blue');
  });

  it('should return correct last updated time', () => {
    const createDate = '2023-10-10 14:30:00';
    expect(component.getCurrencyLastUpdated(createDate)).toBe('14:30:00');
  });

  it('should emit reload event when reload button is clicked', () => {
    spyOn(component.reload, 'emit');
    const reloadButton = fixture.nativeElement.querySelector(
      '.card__error__action',
    );
    reloadButton.click();
    expect(component.reload.emit).toHaveBeenCalled();
  });

  it('should display loader when isLoading is true', () => {
    component.isLoading = true;
    fixture.detectChanges();
    const loaderElement = fixture.nativeElement.querySelector('.card__loader');
    expect(loaderElement).toBeTruthy();
  });

  it('should display currency information when isLoading is false and currencyDetails is valid', () => {
    component.isLoading = false;
    component.currencyDetails = {
      code: 'USD',
      name: 'US Dollar',
      bid: 1.5,
      pctChange: 0.2,
      create_date: '2023-10-10 14:30:00',
    };
    fixture.detectChanges();
    const cardTitleElement =
      fixture.nativeElement.querySelector('.card__title');
    const valueElement = fixture.nativeElement.querySelector('.card__value');

    expect(cardTitleElement.textContent).toContain('US Dollar');
    expect(valueElement.textContent).toContain('1,50');
  });

  it('should display error message when isLoading is false and currencyDetails is invalid', () => {
    component.isLoading = false;
    component.currencyDetails = {
      code: 'USD',
      name: 'US Dollar',
    };
    fixture.detectChanges();
    const errorMessageElement =
      fixture.nativeElement.querySelector('.card__error__text');
    expect(errorMessageElement.textContent).toContain('Algo deu errado');
  });
});
