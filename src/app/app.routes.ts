import { Routes } from '@angular/router';
import { SelectorComponent } from './modules/selector/selector.component';
import { StyleComponent } from './modules/style/style.component';
import { ViewEncapsulationEmulatedComponent } from './modules/style/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationNoneComponent } from './modules/style/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadowDomComponent } from './modules/style/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { InputComponent } from './modules/input/input.component';
import { OutputComponent } from './modules/output/output.component';
import { ContentProjectionComponent } from './modules/content-projection/content-projection.component';
import { ComponentsComponent } from './modules/components/components.component';
import { TemplatesComponent } from './modules/templates/templates.component';
import { HostElementsComponent } from './modules/components/host-elements/host-elements.component';
import { LifecycleComponent } from './modules/components/lifecycle/lifecycle.component';
import { ComponentChildrenComponent } from './modules/components/component-children/component-children.component';
import { DomAPIComponent } from './modules/components/dom-api/dom-api.component';
import { InheritanceComponent } from './modules/components/inheritance/inheritance.component';
import { ProgrammaticRenderComponent } from './modules/components/programmatic-render/programmatic-render.component';
import { AdvancedConfigurationComponent } from './modules/components/advanced-configuration/advanced-configuration.component';
import { CustomCardComponent } from './modules/content-projection/custom-card/custom-card.component';
import { TextBindingComponent } from './modules/templates/text-binding/text-binding.component';
import { AddingEventComponent } from './modules/templates/adding-event/adding-event.component';
import { TwoWayBindingComponent } from './modules/templates/two-way-binding/two-way-binding.component';
import { ControlFlowComponent } from './modules/templates/control-flow/control-flow.component';
import { PipesComponent } from './modules/templates/pipes/pipes.component';
import { SlottingComponent } from './modules/templates/slotting/slotting.component';
import { TemplateFragmentsComponent } from './modules/templates/template-fragments/template-fragments.component';
import { GroupingComponent } from './modules/templates/grouping/grouping.component';
import { TemplateVariablesComponent } from './modules/templates/template-variables/template-variables.component';
import { DeferredLoadingComponent } from './modules/templates/deferred-loading/deferred-loading.component';
import { WhitespaceComponent } from './modules/templates/whitespace/whitespace.component';
import { DirectivesComponent } from './modules/directives/directives.component';
import { AttributeDirectivesComponent } from './modules/directives/attribute-directives/attribute-directives.component';
import { StructuralDirectivesComponent } from './modules/directives/structural-directives/structural-directives.component';
import { DirectiveCompositionComponent } from './modules/directives/directive-composition/directive-composition.component';
import { DependencyInjectionComponent } from './modules/dependency-injection/dependency-injection.component';
import { BasicDependencyInjectionComponent } from './modules/dependency-injection/basic-dependency-injection/basic-dependency-injection.component';
import { InjectableServiceComponent } from './modules/dependency-injection/injectable-service/injectable-service.component';
import { DependencyProvidersComponent } from './modules/dependency-injection/dependency-providers/dependency-providers.component';
import { InjectionContextComponent } from './modules/dependency-injection/injection-context/injection-context.component';
import { HierarchicalInjectorsComponent } from './modules/dependency-injection/hierarchical-injectors/hierarchical-injectors.component';
import { DependencyInjectionInActionComponent } from './modules/dependency-injection/dependency-injection-in-action/dependency-injection-in-action.component';

export const routes: Routes = [
    {
        path: 'components', component: ComponentsComponent, title: 'Angular - Components',
        children: [
            { path: '', redirectTo: 'selector', pathMatch: 'full' },
            { path: 'selector', component: SelectorComponent, title: 'Angular - Selector' },
            {
                path: 'style', component: StyleComponent, title: 'Angular - Style',
                children: [
                    { path: 'emulated', component: ViewEncapsulationEmulatedComponent, title: "Angular - Style - Emulated" },
                    { path: 'none', component: ViewEncapsulationNoneComponent, title: "Angular - Style - None" },
                    { path: 'shadow-dom', component: ViewEncapsulationShadowDomComponent, title: "Angular - Style - Shadow DOM" },
                ]
            },
            { path: 'input', component: InputComponent, title: 'Angular - Input' },
            { path: 'output', component: OutputComponent, title: 'Angular - Output' },
            { path: 'content-projection', component: ContentProjectionComponent, title: 'Angular - Content Projection' },
            { path: 'host-elements', component: HostElementsComponent, title: 'Angular - Host Elements' },
            { path: 'lifecycle', component: LifecycleComponent, title: 'Angular - Lifecycle' },
            { path: 'component-children', component: ComponentChildrenComponent, title: 'Angular - Component Children' },
            { path: 'dom-api', component: DomAPIComponent, title: 'Angular - DOM API' },
            { path: 'inheritance', component: InheritanceComponent, title: 'Angular - Inheritance' },
            { path: 'programmatic-render', component: ProgrammaticRenderComponent, title: 'Angular - Programmatic Render' },
            { path: 'advanced-configuration', component: AdvancedConfigurationComponent, title: 'Angular - Advanced Configuration' },
            { path: 'custom-elements', component: CustomCardComponent, title: 'Angular - Custom Elements' },

        ]
    },
    {
        path: 'templates', component: TemplatesComponent, title: 'Angular - Templates', children: [
            { path: 'text-binding', component: TextBindingComponent, title: 'Angular - Text Binding' },
            { path: 'adding-event', component: AddingEventComponent, title: 'Angular - Adding Event' },
            { path: 'two-way-binding', component: TwoWayBindingComponent, title: 'Angular - Two Way Binding' },
            { path: 'control-flow', component: ControlFlowComponent, title: 'Angular - Control Flow' },
            { path: 'pipes', component: PipesComponent, title: 'Angular - Pipes' },
            { path: 'slotting', component: SlottingComponent, title: 'Angular - Slotting' },
            { path: 'template-fragments', component: TemplateFragmentsComponent, title: 'Angular - Template Fragments' },
            { path: 'grouping', component: GroupingComponent, title: 'Angular - Grouping' },
            { path: 'template-variables', component: TemplateVariablesComponent, title: 'Angular - Template Variables' },
            { path: 'deferred-loading', component: DeferredLoadingComponent, title: 'Angular - Deferred Loading' },
            { path: 'expression-syntax', component: LifecycleComponent, title: 'Angular - Expression Syntax' },
            { path: 'whitespace', component: WhitespaceComponent, title: 'Angular - Whitespace' },

        ]
    },
    {
        path: 'directives', component: DirectivesComponent, title: 'Angular - Directives',
        children:[
            { path: 'attribute-directive', component: AttributeDirectivesComponent, title: 'Angular - Attribute Directive' },
            { path: 'structural-directive', component: StructuralDirectivesComponent, title: 'Angular - Structural Directive'},
            { path: 'directive-composition', component: DirectiveCompositionComponent, title: 'Angular - Directive Composition' },

        ]
    },
    {
        path: 'dependency-injection', component: DependencyInjectionComponent, title: 'Angular - Dependency Injection', 
        children:[
            { path: 'basic-dependency-injection', component: BasicDependencyInjectionComponent, title: 'Angular - Basic Dependency Injection' },
            { path: 'injectable-service', component: InjectableServiceComponent, title: 'Angular - Injectable Service' },
            { path: 'dependency-providers', component: DependencyProvidersComponent, title: 'Angular - Dependency Providers'},
            { path: 'injection-context', component: InjectionContextComponent, title: 'Angular - Injection Context' },
            { path: 'hierarchical-injectors', component: HierarchicalInjectorsComponent, title: 'Angular - Hierarchical Injectors' },
            { path: 'dependency-injection-in-action', component: DependencyInjectionInActionComponent, title: 'Angular - Dependency Injection In Action' },
        ]
    },
    { path: '', redirectTo: 'components', pathMatch: 'full' }
];
