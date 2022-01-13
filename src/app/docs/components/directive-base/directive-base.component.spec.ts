import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsDirectiveBaseComponent } from './directive-base.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsDirectiveBaseComponent;
  let fixture: ComponentFixture<CocoaDocsDirectiveBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsDirectiveBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsDirectiveBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
