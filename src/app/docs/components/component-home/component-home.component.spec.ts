import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponentHomeComponent } from './component-home.component';

describe('BaseComponentComponent', () => {
  let component: DocsComponentHomeComponent;
  let fixture: ComponentFixture<DocsComponentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsComponentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
