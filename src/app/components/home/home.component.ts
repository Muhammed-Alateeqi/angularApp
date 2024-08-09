import { Component } from '@angular/core';
import { HeadingStarStyleComponent } from '../heading-star-style/heading-star-style.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeadingStarStyleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
