import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterEvent, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavigationService } from '../navigation.service';
import { Subject, takeUntil } from 'rxjs';
import { CurrentNavigationURLSegments, HeaderNavigation, HeaderNavigationList, NavigationList } from '../models/common.types';
import { NgClass } from '@angular/common';

@Component({
  selector: '.header',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnDestroy{
  faHome = faHome;
  activeRoute: string= '';
  $destroy = new Subject<boolean>();
  headerNavigationList: HeaderNavigationList = [];
  currentParent:string = '';
  constructor(private navigationService: NavigationService){
    
    this.navigationService.headerNavigationList
      .pipe(takeUntil(this.$destroy))
      .subscribe((navigationList: HeaderNavigationList) => {
      this.headerNavigationList = navigationList;
    });

    this.navigationService.currentNavigation
      .pipe(takeUntil(this.$destroy))
      .subscribe((navigation: CurrentNavigationURLSegments|null) => {
        this.currentParent = navigation?.parent ?? '';
    });

  }
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
  
}