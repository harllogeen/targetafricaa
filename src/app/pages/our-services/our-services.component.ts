import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  ngOnInit() {
    // Initialize AOS inside the component
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
