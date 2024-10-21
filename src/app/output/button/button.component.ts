import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() color:string = 'red';
  @Input({ transform: transformText }) text:string = '';
  @Output() updateCounter:EventEmitter<null> = new EventEmitter();
  onClick() {
    this.updateCounter.emit();
  }
}
function transformText(text:string):string {
  return text.toUpperCase();
}