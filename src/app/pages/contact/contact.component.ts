import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  image = 'assets/images/Frame.png'; // Replace with your image URL
  title = 'Lets Work Together';
  content = 'Our main purpose is to bring your dreams to reality. Join the experience by filling in your details and what you require';

}
