import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titlediv2Component } from './titlediv2.component';

describe('Titlediv2Component', () => {
  let component: Titlediv2Component;
  let fixture: ComponentFixture<Titlediv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Titlediv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Titlediv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
