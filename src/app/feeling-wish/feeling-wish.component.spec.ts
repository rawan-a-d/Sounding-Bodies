import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingWishComponent } from './feeling-wish.component';

describe('FeelingWishComponent', () => {
  let component: FeelingWishComponent;
  let fixture: ComponentFixture<FeelingWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingWishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
