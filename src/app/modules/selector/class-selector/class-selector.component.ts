import { Component } from '@angular/core';

@Component({
  selector: '.class-selector',
  standalone: true,
  imports: [],
  templateUrl: './class-selector.component.html',
  styleUrl: './class-selector.component.scss'
})
export class ClassSelectorComponent {
  codeContent: string = `
    @Component({
      selector: '.class-selector',
      standalone: true,
      imports: [],
      templateUrl: './class-selector.component.html',
      styleUrl: './class-selector.component.scss'
    })
  `
}
