import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '.header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faHome = faHome;
  navigationList: NavigationList = [
    { id:"selector", label: "Selector", route: "selector" },
    { id: "style", label: "Style", route: "style" },
    { id: "input", label: "Input", route: "input" },
    { id: "output", label: "Output", route: "output" },
    { id: "content-projection", label: "Content Projection", route: "content-projection" },
  ]
}
export type Navigation = {
  id:string;
  label: string;
  route: string;
  icon?: string;
};

export type NavigationList = Navigation[];