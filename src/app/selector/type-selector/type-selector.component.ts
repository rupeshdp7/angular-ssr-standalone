import { Component } from '@angular/core';

@Component({
  selector: 'app-type-selector',
  standalone: true,
  imports: [],
  templateUrl: './type-selector.component.html',
  styleUrl: './type-selector.component.scss'
})
export class TypeSelectorComponent {
  codeContent: string = `
    @Component({
      selector: 'app-type-selector',
      standalone: true,
      imports: [],
      templateUrl: './type-selector.component.html',
      styleUrl: './type-selector.component.scss'
    })
  `

}
