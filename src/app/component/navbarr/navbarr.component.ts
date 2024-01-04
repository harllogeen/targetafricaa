import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.scss'],
})
export class NavbarrComponent implements OnInit {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}

  ngOnInit(): void {
  }
  showDropdown = false;


  // isOpen = false;

  // toggleDropdown(): void {
  //   this.isOpen = !this.isOpen;
  // }
}
