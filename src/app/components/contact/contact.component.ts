import { Component } from '@angular/core';
import { HeadingStarStyleComponent } from '../heading-star-style/heading-star-style.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeadingStarStyleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
