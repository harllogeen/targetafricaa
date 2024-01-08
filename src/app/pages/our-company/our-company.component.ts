import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.scss'],
})
export class OurCompanyComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Initialize AOS inside the component
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
