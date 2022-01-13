import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsComponentHomeComponent } from './component-home.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsComponentHomeComponent;
  let fixture: ComponentFixture<CocoaDocsComponentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsComponentHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsComponentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
