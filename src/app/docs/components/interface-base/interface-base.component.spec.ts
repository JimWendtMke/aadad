import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsInterfaceBaseComponent } from './interface-base.component';

describe('CocoaDocsInterfaceBaseComponent', () => {
  let component: CocoaDocsInterfaceBaseComponent;
  let fixture: ComponentFixture<CocoaDocsInterfaceBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsInterfaceBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsInterfaceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
