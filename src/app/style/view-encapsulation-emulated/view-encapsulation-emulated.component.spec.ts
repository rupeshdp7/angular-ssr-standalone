import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated.component';

describe('ViewEncapsulationEmulatedComponent', () => {
  let component: ViewEncapsulationEmulatedComponent;
  let fixture: ComponentFixture<ViewEncapsulationEmulatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulationEmulatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulationEmulatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
