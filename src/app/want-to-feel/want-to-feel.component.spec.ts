import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToFeelComponent } from './want-to-feel.component';

describe('WantToFeelComponent', () => {
  let component: WantToFeelComponent;
  let fixture: ComponentFixture<WantToFeelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToFeelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToFeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
