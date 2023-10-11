import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCardComponent,
    DashboardComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
