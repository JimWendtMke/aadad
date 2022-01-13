import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsComponentBaseComponent } from './component-base.component';

describe('BaseComponentComponent', () => {
  let component: DocsComponentBaseComponent;
  let fixture: ComponentFixture<DocsComponentBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsComponentBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsComponentBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
