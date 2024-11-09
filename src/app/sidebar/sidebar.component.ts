import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { CurrentNavigationURLSegments, Navigation, NavigationList } from '../models/common.types';
import { Subject, takeUntil } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {
  $destroy = new Subject<boolean>();
  currentSection: string='';
  constructor(private navigationService: NavigationService){

    this.navigationService.navigationListSubject
    .pipe(takeUntil(this.$destroy))
    .subscribe((route:NavigationList)=>{
      // Set sidebar current items based on 
      if(route) 
        this.navigationList = route;
    });
    this.navigationService.navigationSubject
      .pipe(takeUntil(this.$destroy))
      .subscribe((route) => {
        console.log(route)
      });
    this.navigationService.currentNavigation
      .pipe(takeUntil(this.$destroy))
      .subscribe((navigation: CurrentNavigationURLSegments | null) => {
        this.currentSection = navigation?.child ?? '';
      });
  }
  navigationList: NavigationList = [ ];
  
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
