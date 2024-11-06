import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalInjectorsComponent } from './hierarchical-injectors.component';

describe('HierarchicalInjectorsComponent', () => {
  let component: HierarchicalInjectorsComponent;
  let fixture: ComponentFixture<HierarchicalInjectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchicalInjectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchicalInjectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
