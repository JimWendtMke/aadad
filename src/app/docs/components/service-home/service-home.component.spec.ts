import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsServiceHomeComponent } from './service-home.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsServiceHomeComponent;
  let fixture: ComponentFixture<CocoaDocsServiceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsServiceHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsServiceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
