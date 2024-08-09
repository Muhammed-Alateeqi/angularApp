import { Component } from '@angular/core';
import { HeadingStarStyleComponent } from '../heading-star-style/heading-star-style.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeadingStarStyleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
