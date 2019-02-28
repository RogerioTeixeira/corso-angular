import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OfferteComponent } from './offerte/offerte.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { ListaProdottiComponent } from './shared/lista-prodotti/lista-prodotti.component';
import { SchedaProdottoComponent } from './shared/scheda-prodotto/scheda-prodotto.component';
import { FormsModule  } from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import localeItExtra from '@angular/common/locales/extra/fr';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { DettaglioProdottiComponent } from './dettaglio-prodotti/dettaglio-prodotti.component';
import { CalcPricePipe } from './shared/calc-price.pipe';
import { ListaAlternativeComponent } from './dettaglio-prodotti/lista-alternative/lista-alternative.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CalcolaTotalePipe } from './shared/calcola-totale.pipe';

registerLocaleData(localeIt, 'it', localeItExtra);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OfferteComponent,
    ProdottiComponent,
    ListaProdottiComponent,
    SchedaProdottoComponent,
    RegistrazioneComponent,
    LoginComponent,
    DettaglioProdottiComponent,
    CalcPricePipe,
    ListaAlternativeComponent,
    CheckoutComponent,
    CalcolaTotalePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'it' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
