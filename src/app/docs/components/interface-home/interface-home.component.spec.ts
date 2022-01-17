import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsInterfaceHomeComponent } from './interface-home.component';

describe('BaseComponentComponent', () => {
  let component: DocsInterfaceHomeComponent;
  let fixture: ComponentFixture<DocsInterfaceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsInterfaceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsInterfaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
