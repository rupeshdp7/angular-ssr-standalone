import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationShadowDomComponent } from './view-encapsulation-shadow-dom.component';

describe('ViewEncapsulationShadowDomComponent', () => {
  let component: ViewEncapsulationShadowDomComponent;
  let fixture: ComponentFixture<ViewEncapsulationShadowDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulationShadowDomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulationShadowDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
