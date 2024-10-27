import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomAPIComponent } from './dom-api.component';

describe('DomAPIComponent', () => {
  let component: DomAPIComponent;
  let fixture: ComponentFixture<DomAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
