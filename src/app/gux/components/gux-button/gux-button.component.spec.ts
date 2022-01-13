/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GuxButtonComponent } from './gux-button.component';
import { ButtonModule } from 'primeng/button';

describe('CuxButtonComponent', () => {
  let component: GuxButtonComponent;
  let fixture: ComponentFixture<GuxButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ GuxButtonComponent ],
        imports: [ ButtonModule ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GuxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
