import { Component} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { RouterModule } from '@angular/router';

@Component ({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    RouterModule
  ],
  template: `
  <main>
    <header class="brand-name">
      <a [routerLink]="['/']">
            <img class="brand-logo" src="/assets/logo.svg">
      </a>
    </header>
    
    <section class="content">
      <router-outlet></router-outlet>
      <!--<app-home></app-home> -->
     <!-- <app-aboutus></app-aboutus> -->
    </section>
  </main>`,
styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'babakovaviktoriia';
}
