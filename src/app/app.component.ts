import { Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    HousingLocationComponent

  ],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg">
    </header>
    <section class="content">
      <app-home></app-home>
      <app-aboutus></app-aboutus>
    </section>
  </main>`,
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
  title = 'babakovaviktoriia';
}
