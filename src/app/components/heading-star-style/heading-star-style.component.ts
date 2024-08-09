import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-heading-star-style',
  standalone: true,
  imports: [],
  templateUrl: './heading-star-style.component.html',
  styleUrl: './heading-star-style.component.css'
})
export class HeadingStarStyleComponent {

    @Input() headingTitle!:string ;
    @Input() portfoliocColor:string ='#fff';
 
}

