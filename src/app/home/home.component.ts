import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent} from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingServiceService } from '../housingservice.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
    ],
  template: `
    <section>
      <form>
        <input type="text">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let Housinglocation of 
      HousinglocationList" [HousinglocationList]
      ="Housinglocation"></app-housing-location>
    </section>
    <section class="listing-products">
     <!-- <app-product [Product]="Product"></app-product > -->

    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 //readonly baseUrl = 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png'

  HousinglocationList : Housinglocation[] =[];
  housingServise: HousingServiceService = inject(HousingServiceService);

  constructor() {
    this.HousinglocationList = this.housingServise.
    getAllHousinglocation();
  }
  
      //photo: 'https://res.cloudinary.com/dj484tw6k/f_auto,q_auto,c_pad,b_white,w_505,h_505/v1656715796/99127.png',
      //available: true,
      
    //}
  }

