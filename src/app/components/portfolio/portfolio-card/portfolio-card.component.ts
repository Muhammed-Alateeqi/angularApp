import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.css'
})
export class PortfolioCardComponent {
      @Input() cardImage!:string;
      @Output() CardClicked = new EventEmitter<string>;

      modalImage(){
        this.CardClicked.emit(this.cardImage)
      }
     
      
}

