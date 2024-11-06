import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { Navigation, NavigationList, HeaderNavigation, HeaderNavigationList } from './models/common.types';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  navigationSubject = new BehaviorSubject<Navigation | null>(null);
  navigationListSubject = new ReplaySubject<NavigationList>();

  _headerNavigationList: HeaderNavigationList = [
    {
      id: "components", label: "Components", route: "components",
      subMenu:
        [
          { id: "selector", label: "Selector", route: "components/selector" },
          { id: "style", label: "Style", route: "components/style" },
          { id: "input", label: "Input", route: "components/input" },
          { id: "output", label: "Output", route: "components/output" },
          { id: "content-projection", label: "Content Projection", route: "components/content-projection" },
          { id: "host-elements", label: "Host Elements", route: "components/host-elements" },
          { id: "lifecycle", label: "Lifecycle", route: "components/lifecycle" },
          { id: "component-children", label: "Component Children", route: "components/component-children" },
          { id: "DOM-API", label: "DOM API", route: "components/dom-api" },
          { id: "inheritance", label: "inheritance", route: "components/inheritance" },
          { id: "programmatic-render", label: "Programmatic Render", route: "components/programmatic-render" },
          { id: "advanced-configuration", label: "Advanced Configuration", route: "components/advanced-configuration" },
          { id: "custom-elements", label: "Custom Elements", route: "components/custom-elements" },
        ]
    },
    {
      id: "templates", label: "Templates", route: "templates",
      subMenu:
        [
          { id: "text-binding", label: "Text Binding", route: "templates/text-binding" },
          { id: "adding-event", label: "Adding Event", route: "templates/adding-event" },
          { id: "two-way-binding", label: "Two Way Binding", route: "templates/two-way-binding" },
          { id: "control-flow", label: "Control Flow", route: "templates/control-flow" },
          { id: "pipes", label: "Pipes", route: "templates/pipes" },
          { id: "slotting", label: "Slotting", route: "templates/slotting" },
          { id: "template-fragments", label: "Template Fragments", route: "templates/template-fragments" },
          { id: "grouping", label: "Grouping", route: "templates/grouping" },
          { id: "template-variables", label: "Template Variables", route: "templates/template-variables" },
          { id: "deferred-loading", label: "Deferred Loading", route: "templates/deferred-loading" },
          { id: "expression-syntax", label: "Expression Syntax", route: "templates/expression-syntax" },
          { id: "whitespace", label: "Whitespace", route: "templates/whitespace" },
        ]
    },
    {
      id: "directives", label: "Directives", route: "directives", subMenu: [
        { id: "attribute-directive", label: "Attribute Directive", route: "directives/attribute-directive" },
        { id: "structural-directive", label: "Structural Directive", route: "directives/structural-directive" },
        { id: "directive-composition", label: "Directive Composition", route: "directives/directive-composition" },
      ]
    },
    {
      id: "dependency-injection", label: "Dependency Injection", route: "dependency-injection", subMenu: [
        { id: "basic-dependency-injection", label: "Basic Dependency Injection", route: "dependency-injection/basic-dependency-injection" },
        { id: "injectable-service", label: "Injectable Service", route: "dependency-injection/injectable-service" },
        { id: "dependency-providers", label: "Dependency Providers", route: "dependency-injection/dependency-providers" },
        { id: "injection-context", label: "Injection Context", route: "dependency-injection/injection-context" },
        { id: "hierarchical-injectors", label: "Hierarchical Injectors", route: "dependency-injection/hierarchical-injectors" },
        { id: "dependency-injection-in-action", label: "Dependency Injection In Action", route: "dependency-injection/dependency-injection-in-action" },
      ]
    },
  ]


  get headerNavigationList(): Observable<HeaderNavigationList> {
    return of(this._headerNavigationList);
  }

  constructor() { }
}
