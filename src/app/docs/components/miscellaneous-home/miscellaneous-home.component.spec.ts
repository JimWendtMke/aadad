import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsMiscellaneousHomeComponent } from './miscellaneous-home.component';

describe('BaseComponentComponent', () => {
  let component: CocoaDocsMiscellaneousHomeComponent;
  let fixture: ComponentFixture<CocoaDocsMiscellaneousHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsMiscellaneousHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsMiscellaneousHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
