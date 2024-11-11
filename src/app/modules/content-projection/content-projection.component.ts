import { Component } from '@angular/core';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { MultipleContentProjectionComponent } from './multiple-content-projection/multiple-content-projection.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [CustomCardComponent, MultipleContentProjectionComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss'
})
export class ContentProjectionComponent {

}
