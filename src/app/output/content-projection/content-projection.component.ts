import { Component } from '@angular/core';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CustomCardComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

}
