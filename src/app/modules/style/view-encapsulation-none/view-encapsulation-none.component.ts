import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-none',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsulation-none.component.html',
  styleUrl: './view-encapsulation-none.component.scss',
  encapsulation: ViewEncapsulation.None, // None encapsulation
})
export class ViewEncapsulationNoneComponent {

}
