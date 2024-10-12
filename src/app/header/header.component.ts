import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: '.header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navigationList: NavigationList = [
    { id:"selector", label: "Selector", route: "selector" },
    { id:"style", label: "Style", route: "style" }
  ]
}
export type Navigation = {
  id:string;
  label: string;
  route: string;
  icon?: string;
};

export type NavigationList = Navigation[];