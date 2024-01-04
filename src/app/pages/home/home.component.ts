import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  slides: string[] = [
    'assets/images/slide.png',
    'assets/images/slide2.png',
    'assets/images/slide3.png',
  ]; // Add your image URLs here
  currentIndex = 0;
  isAnimating = false;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    setInterval(() => {
      this.goToSlide((this.currentIndex + 1) % this.slides.length);
    }, 3000); // Change the time interval as needed
  }

  goToSlide(index: number): void {
    if (!this.isAnimating && index !== this.currentIndex) {
      this.isAnimating = true;
      setTimeout(() => {
        this.currentIndex = index;
        this.isAnimating = false;
      }, 500); // Change animation duration as needed
    }
  }
}
