import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleContentProjectionComponent } from './multiple-content-projection.component';

describe('MultipleContentProjectionComponent', () => {
  let component: MultipleContentProjectionComponent;
  let fixture: ComponentFixture<MultipleContentProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleContentProjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
