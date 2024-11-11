import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  counter: number = 0;
  updateCounter() {
    this.counter++;
  }
}
