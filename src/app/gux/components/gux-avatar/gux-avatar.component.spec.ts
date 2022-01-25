import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuxAvatarComponent } from './gux-avatar.component';

describe('GuxAvatarComponent', () => {
  let component: GuxAvatarComponent;
  let fixture: ComponentFixture<GuxAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuxAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuxAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
