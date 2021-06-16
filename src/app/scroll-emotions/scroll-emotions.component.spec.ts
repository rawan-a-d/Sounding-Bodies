import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollEmotionsComponent } from './scroll-emotions.component';

describe('ScrollEmotionsComponent', () => {
  let component: ScrollEmotionsComponent;
  let fixture: ComponentFixture<ScrollEmotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollEmotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
