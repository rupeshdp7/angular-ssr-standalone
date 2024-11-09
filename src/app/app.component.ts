import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, /* FooterComponent, */ SidebarComponent],
  providers: [NavigationService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router:Router, private navigationService:NavigationService){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.navigationService.setCurrentNavigation(event.urlAfterRedirects);
      }
    })
  }
}
