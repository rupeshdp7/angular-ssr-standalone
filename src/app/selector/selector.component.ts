import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypeSelectorComponent } from './type-selector/type-selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { PseudoSelectorComponent } from './pseudo-selector/pseudo-selector.component';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [RouterModule, TypeSelectorComponent, ClassSelectorComponent, AttributeSelectorComponent, PseudoSelectorComponent],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.scss'
})
export class SelectorComponent { }
