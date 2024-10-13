import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { StyleComponent } from './style/style.component';
import { ViewEncapsulationEmulatedComponent } from './style/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationNoneComponent } from './style/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadowDomComponent } from './style/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';

export const routes: Routes = [
    { path: 'selector', component: SelectorComponent, title: 'Selector'},
    { path: 'style', component: StyleComponent, title: 'Style',
        children:[
            { path: 'emulated', component: ViewEncapsulationEmulatedComponent, title: "Style - Emulated" },
            { path: 'none', component: ViewEncapsulationNoneComponent, title: "Style - None" },
            { path: 'shadow-dom', component: ViewEncapsulationShadowDomComponent, title: "Style - Shadow DOM" },
        ]
    },
];
