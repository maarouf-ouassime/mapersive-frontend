import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTopPageComponent } from './to-top-page.component';

describe('ToTopPageComponent', () => {
  let component: ToTopPageComponent;
  let fixture: ComponentFixture<ToTopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTopPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
