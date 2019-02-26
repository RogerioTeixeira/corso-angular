import { Injectable } from '@angular/core';
import { NavbarConfig } from '../navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private navConfig: NavbarConfig;
  constructor() {
    
  }

  getNavbarConfig(logged?:boolean):NavbarConfig{
    return {
      brand: { label: 'SHOP', pathUrl: 'home' },
      links: logged ? [
        { label: 'Home', pathUrl: 'home' },
        { label: 'Offerte del giorno', pathUrl: 'offerte' },
        { label: 'Prodotti', pathUrl: 'prodotti' },
      ] :
      [
        { label: 'Home', pathUrl: 'home' },
        { label: 'Offerte del giorno', pathUrl: 'offerte' },
        { label: 'Prodotti', pathUrl: 'prodotti' },
        { label: 'Registra', pathUrl: 'registra' },
        { label: 'Login', pathUrl: 'login' },
      ]
    }
    ;
  }
}
