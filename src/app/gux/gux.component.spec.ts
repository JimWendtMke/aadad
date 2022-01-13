import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuxComponent } from './gux.component';

describe('GuxComponent', () => {
  let component: GuxComponent;
  let fixture: ComponentFixture<GuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
