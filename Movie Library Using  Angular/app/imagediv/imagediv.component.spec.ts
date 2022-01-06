import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagedivComponent } from './imagediv.component';

describe('ImagedivComponent', () => {
  let component: ImagedivComponent;
  let fixture: ComponentFixture<ImagedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagedivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
