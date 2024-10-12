import { Component } from '@angular/core';

@Component({
  selector: '[selector]',
  standalone: true,
  imports: [],
  templateUrl: './attribute-selector.component.html',
  styleUrl: './attribute-selector.component.scss'
})
export class AttributeSelectorComponent {
  codeContent : string = `
    @Component({
      selector: '[selector]',
      standalone: true,
      imports: [],
      templateUrl: './attribute-selector.component.html',
      styleUrl: './attribute-selector.component.scss'
    })
  `;
}
