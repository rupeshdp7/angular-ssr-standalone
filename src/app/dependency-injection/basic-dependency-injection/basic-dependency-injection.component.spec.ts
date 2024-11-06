import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDependencyInjectionComponent } from './basic-dependency-injection.component';

describe('BasicDependencyInjectionComponent', () => {
  let component: BasicDependencyInjectionComponent;
  let fixture: ComponentFixture<BasicDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDependencyInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
