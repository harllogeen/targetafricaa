import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurMissionComponent } from './pages/our-mission/our-mission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'mission', component: OurMissionComponent },

  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }, // Redirect to home for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
