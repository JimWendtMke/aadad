import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuxTableComponent } from './gux-table.component';

describe('GuxTableComponent', () => {
  let component: GuxTableComponent;
  let fixture: ComponentFixture<GuxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuxTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
