import { Component } from '@angular/core';

@Component({
  selector: '[selector]:not([attribute-selector])',
  standalone: true,
  imports: [],
  templateUrl: './pseudo-selector.component.html',
  styleUrl: './pseudo-selector.component.scss'
})
export class PseudoSelectorComponent {
  codeContent: string = `
    @Component({
      selector: '[selector]:not(.attribute-selector)',
      standalone: true,
      imports: [],
      templateUrl: './pseudo-selector.component.html',
      styleUrl: './pseudo-selector.component.scss'
    })
  `;
}
