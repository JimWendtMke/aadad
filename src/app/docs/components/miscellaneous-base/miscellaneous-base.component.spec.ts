import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoaDocsMiscellaneousBaseComponent } from './miscellaneous-base.component';

describe('CocoaDocsMiscellaneousComponent', () => {
  let component: CocoaDocsMiscellaneousBaseComponent;
  let fixture: ComponentFixture<CocoaDocsMiscellaneousBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocoaDocsMiscellaneousBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocoaDocsMiscellaneousBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
