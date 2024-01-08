import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    // Initialize AOS inside the component
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
