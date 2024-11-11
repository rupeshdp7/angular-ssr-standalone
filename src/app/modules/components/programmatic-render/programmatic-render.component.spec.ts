import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaticRenderComponent } from './programmatic-render.component';

describe('ProgrammaticRenderComponent', () => {
  let component: ProgrammaticRenderComponent;
  let fixture: ComponentFixture<ProgrammaticRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammaticRenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammaticRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
