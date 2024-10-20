import { Routes } from '@angular/router';
import { SelectorComponent } from './selector/selector.component';
import { StyleComponent } from './style/style.component';
import { ViewEncapsulationEmulatedComponent } from './style/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationNoneComponent } from './style/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadowDomComponent } from './style/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';

export const routes: Routes = [
    { path: 'selector', component: SelectorComponent, title: 'Angular - Selector'},
    {
        path: 'style', component: StyleComponent, title: 'Angular - Style',
        children:[
            { path: 'emulated', component: ViewEncapsulationEmulatedComponent, title: "Angular - Style - Emulated" },
            { path: 'none', component: ViewEncapsulationNoneComponent, title: "Angular - Style - None" },
            { path: 'shadow-dom', component: ViewEncapsulationShadowDomComponent, title: "Angular - Style - Shadow DOM" },
        ]
    },
    { path: 'input', component: InputComponent, title: 'Angular - Input' },
    { path: 'output', component: OutputComponent, title: 'Angular - Output' },
];
