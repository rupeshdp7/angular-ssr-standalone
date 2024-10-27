import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../navigation.service';
import { Subject, takeUntil } from 'rxjs';
import { HeaderNavigation, HeaderNavigationList, NavigationList } from '../models/common.types';

@Component({
  selector: '.header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy{
  faHome = faHome;
  activeRoute: string= '';
  $destroy = new Subject<boolean>();
  headerNavigationList: HeaderNavigationList = [];
  constructor(private navigationService: NavigationService, private router: ActivatedRoute){
    

    this.navigationService.headerNavigationList
    .pipe(takeUntil(this.$destroy))
      .subscribe((navigationList: HeaderNavigationList) => {
      this.headerNavigationList = navigationList;
      // this.setCurrentRoute(this.headerNavigationList[0].subMenu);
      
    });
    this.router.url.subscribe((url) => {

      console.log(url)
    })
    
  }
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
  setCurrentRoute(route:NavigationList){
    console.log(route);
    this.navigationService.navigationListSubject.next(route);
  }
  
  
}