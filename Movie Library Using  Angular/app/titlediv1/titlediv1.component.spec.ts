import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titlediv1Component } from './titlediv1.component';

describe('Titlediv1Component', () => {
  let component: Titlediv1Component;
  let fixture: ComponentFixture<Titlediv1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Titlediv1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Titlediv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
