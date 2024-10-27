import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { Navigation, NavigationList } from '../models/common.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnDestroy {
  $destroy = new Subject<boolean>();
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
      });
  }
  navigationList: NavigationList = [ ];
  
  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
