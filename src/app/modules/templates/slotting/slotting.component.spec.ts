import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottingComponent } from './slotting.component';

describe('SlottingComponent', () => {
  let component: SlottingComponent;
  let fixture: ComponentFixture<SlottingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlottingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlottingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
