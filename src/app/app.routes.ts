import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { StyleComponent } from './style/style.component';

export const routes: Routes = [
    { path: 'selector', component: SelectorComponent, title: 'Selector'},
    { path: 'style', component: StyleComponent, title: 'Style',},
];
