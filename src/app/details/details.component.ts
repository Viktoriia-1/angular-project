import { Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingServiceService } from '../housingservice.service';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
  CommonModule,
  RouterModule
  ],
  template: `
    <article>
      <img [src]="housingLocation?.photo" alt=""]>
      <h2 class="listing-heading">
        {{housingLocation?.name}}
      </h2>
      <p>{{housingLocation?.city}}</p>
      <p>{{housingLocation?.wifi}}</p>
      <p>{{housingLocation?.laundry}}</p>
      <p>{{housingLocation?.state}}</p>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
 route: ActivatedRoute = inject(ActivatedRoute);
 houstingService = inject(HousingServiceService)
 housingLocation: Housinglocation | undefined;
 //housingLocationId = -1;
 constructor() {
   const housingLocationId = Number(this.route.snapshot.params ['id']);
   this.housingLocation = this.houstingService.
   getHousinglocationById(housingLocationId)
  }
}
