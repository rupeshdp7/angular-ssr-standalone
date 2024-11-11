import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  _buttonColor: string = '#000000';
  @Input() set buttonColor(color:string){
    this._buttonColor = color;
  };
  get buttonColor() {
    return this._buttonColor;
  }

  //* Input set as required
  _buttonText: string = 'Default Text';
  @Input({required:true}) set buttonText(text:string){
    this._buttonText = text;
  };
  get buttonText() {
    return this._buttonText;
  }

  //* Input transform enabled
  _buttonTextColor: string = '#000000';
  @Input({transform: toUpperCase}) set buttonTextColor(color:string){
    this._buttonTextColor = color;
  };
  get buttonTextColor() {
    return this._buttonTextColor;
  }
}

function toUpperCase(value:string){
  return value.toUpperCase();
}
