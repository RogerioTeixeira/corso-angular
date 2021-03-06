import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfferteComponent } from './offerte/offerte.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { LoginComponent } from './login/login.component';
import { DettaglioProdottiComponent } from './dettaglio-prodotti/dettaglio-prodotti.component';
import { CheckoutComponent } from "./checkout/CheckoutComponent";
import { ConfermaAcquistoComponent } from './conferma-acquisto/conferma-acquisto.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'offerte', component:OfferteComponent},
  {path:'prodotti', component:ProdottiComponent},
  {path:'registra', component:RegistrazioneComponent},
  {path:'carrello', component: CheckoutComponent},
  {path:'prodotti/dettaglio/:id', component:DettaglioProdottiComponent},
  {path:'conferma', component:ConfermaAcquistoComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
