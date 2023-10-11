import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

registerLocaleData(pt);

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        DashboardComponent,
        CurrencyCardComponent,
      ],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Currency Converter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Currency Converter');
  });
});
