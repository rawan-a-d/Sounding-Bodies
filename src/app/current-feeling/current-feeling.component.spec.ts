import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFeelingComponent } from './current-feeling.component';

describe('CurrentFeelingComponent', () => {
  let component: CurrentFeelingComponent;
  let fixture: ComponentFixture<CurrentFeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFeelingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentFeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
