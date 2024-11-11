import { Component } from '@angular/core';
import { CustomCardMultipleComponent } from './custom-card-multiple/custom-card-multiple.component';
import { CardTitleComponent } from './card-title/card-title.component';

@Component({
  selector: 'app-multiple-content-projection',
  standalone: true,
  imports: [CustomCardMultipleComponent, CardTitleComponent],
  templateUrl: './multiple-content-projection.component.html',
  styleUrl: './multiple-content-projection.component.scss'
})
export class MultipleContentProjectionComponent {

}
