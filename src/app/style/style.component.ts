import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-style',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './style.component.html',
  styleUrl: './style.component.scss'
})
export class StyleComponent {
  styleComponents = [
    { title: 'Emulated', path: 'emulated' },
    { title: 'None', path: 'none' },
    { title: 'Shadow DOM', path:'shadow-dom' },
  ]
}
