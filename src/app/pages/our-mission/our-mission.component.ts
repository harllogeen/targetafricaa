import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

interface ToolbarItem {
  title: string;
  content: string;
  image: string;
}

@Component({
  selector: 'app-our-mission',
  templateUrl: './our-mission.component.html',
  styleUrls: ['./our-mission.component.scss'],
})
export class OurMissionComponent implements OnInit {
  constructor(private cd: ChangeDetectorRef) {}

  missions = [
    {
      title: 'Our Mission',
      content:
        'Our Mission is to provide our clients with world class enterprise technologies and bespoke business solutions that will help them increase efficiency, productivity and have competitive advantage.',
      image: 'assets/images/Rectangle 665 (3).png',
    },
    {
      title: 'Our Vision',
      content:
        'On the strength of our mission, philosophy and objective we will provide you with Services unrivalled and unparalleled by others and still leave room for improvement. We shall maintain leadership through Courageous performance and Employ Fidelity in all relations with our client.',
      image: 'assets/images/Rectangle 665 (4).png',
    },
    {
      title: 'Our Privacy',
      content:
        'Our policy is to encourage our personnel to ensure probity in all their actions and responsibilities and is held accountable for misdeeds no matter how minute. As a result of the probity level required, reliance is brought to bear on each of our personnel. We believe that there is no TargetAfrica Integrated Services Ltd substitute for reliance and advancement. Undivided focus and attention will bring forth fruitful results if maintained through vigilance, adequate supervision and commitment.',
      image: 'assets/images/Rectangle 665 (5).png',
    },
    {
      title: 'Our People',
      content:
        'We engage the best of personnel in the industry and have maintained comparative lead in quality and personnel performance when compared to other firms. Our personnel have provided informed insight and unparalleled experience to our clients.Our men are literate, fit, smart, hard working, diligent and committed. Our personnel are subjected to industry’s most exhaustive screening process and background checks.',
      image: 'assets/images/Rectangle 665 (6).png',
    },
    {
      title: 'Our Results',
      content:
        'The number of our clients and the increasing volume of enquiries about our business speak for themselves. The retention of our service by our Clients at the end of last year was 100%. New client sign-in has increased and demand has kept coming. Our profit margin through continuous patronage has impressed our shareholders and they have passed vote of high confidence on the leadership of the company. Join us to keep the earnings rolling and the performance improving.',
      image: 'assets/images/Rectangle 665 (7).png',
    },
  ];

  selectedToolbarItem = this.missions[0]; // Initially select the first item

  activeItem: ToolbarItem | undefined = this.missions[0]; // Set the first item as active by default

  showContent(item: ToolbarItem) {
    this.activeItem = item;
  }

  ngOnInit() {}
}
