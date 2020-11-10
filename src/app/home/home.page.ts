import { Component } from '@angular/core';
import { Address } from '../address';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedAddress: Address = {
    addressLine1: '3S100 IL-53',
    city: 'Glen Ellyn',
    state: 'IL',
    zipCode: '60137',
    latitude: '41.828940',
    longitude: '-88.056390'
  };
  constructor() {}

}
