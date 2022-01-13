import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsDirectiveHomeComponent } from './directive-home.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsDirectiveHomeComponent;
  let fixture: ComponentFixture<CocoaDocsDirectiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsDirectiveHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsDirectiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
