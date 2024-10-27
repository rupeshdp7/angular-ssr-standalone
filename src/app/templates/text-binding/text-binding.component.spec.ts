import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBindingComponent } from './text-binding.component';

describe('TextBindingComponent', () => {
  let component: TextBindingComponent;
  let fixture: ComponentFixture<TextBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
