import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsInterfaceBaseComponent } from './interface-base.component';

describe('DocsInterfaceBaseComponent', () => {
  let component: DocsInterfaceBaseComponent;
  let fixture: ComponentFixture<DocsInterfaceBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsInterfaceBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsInterfaceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
