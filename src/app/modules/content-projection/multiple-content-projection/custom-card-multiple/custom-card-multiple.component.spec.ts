import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardMultipleComponent } from './custom-card-multiple.component';

describe('CustomCardMultipleComponent', () => {
  let component: CustomCardMultipleComponent;
  let fixture: ComponentFixture<CustomCardMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCardMultipleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomCardMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
