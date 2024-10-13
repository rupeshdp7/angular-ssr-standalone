import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulationNoneComponent } from './view-encapsulation-none.component';

describe('ViewEncapsulationNoneComponent', () => {
  let component: ViewEncapsulationNoneComponent;
  let fixture: ComponentFixture<ViewEncapsulationNoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulationNoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulationNoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
