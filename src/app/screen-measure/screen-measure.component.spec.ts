import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenMeasureComponent } from './screen-measure.component';

describe('ScreenMeasureComponent', () => {
  let component: ScreenMeasureComponent;
  let fixture: ComponentFixture<ScreenMeasureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenMeasureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
