import { Component } from '@angular/core';
import { HeadingStarStyleComponent } from "../heading-star-style/heading-star-style.component";
import { PortfolioCardComponent } from './portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeadingStarStyleComponent , PortfolioCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imageToggle : boolean = false;
  image :string = '';
      ShowImage(img:string){
        this.imageToggle = true;
        this.image = img;
        // console.log(img)
      }
      modalClose(event: MouseEvent) {
        event.preventDefault(); 
        this.imageToggle = false;
      }
}
