import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsInterfaceHomeComponent } from './interface-home.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsInterfaceHomeComponent;
  let fixture: ComponentFixture<CocoaDocsInterfaceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsInterfaceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsInterfaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
