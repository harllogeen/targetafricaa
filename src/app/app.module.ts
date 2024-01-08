import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarrComponent } from './component/navbarr/navbarr.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurCompanyComponent } from './pages/our-company/our-company.component';
import { OurMissionComponent } from './pages/our-mission/our-mission.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    HomeComponent,
    AboutUsComponent,
    OurCompanyComponent,
    OurMissionComponent,
    OurServicesComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule, MatTabsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngAfterViewInit() {
    AOS.init();
  }
}
