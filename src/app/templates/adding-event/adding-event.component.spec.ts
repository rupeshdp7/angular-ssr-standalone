import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingEventComponent } from './adding-event.component';

describe('AddingEventComponent', () => {
  let component: AddingEventComponent;
  let fixture: ComponentFixture<AddingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
