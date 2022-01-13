import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsServiceBaseComponent } from './service-base.component';

describe('CocoaDocsServiceBaseComponent', () => {
  let component: CocoaDocsServiceBaseComponent;
  let fixture: ComponentFixture<CocoaDocsServiceBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsServiceBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsServiceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
