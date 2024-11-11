import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-shadow-dom',
  standalone: true,
  imports: [],
  templateUrl: './view-encapsulation-shadow-dom.component.html',
  styleUrl: './view-encapsulation-shadow-dom.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom, // Shadow DOM encapsulation
})
export class ViewEncapsulationShadowDomComponent {

}
