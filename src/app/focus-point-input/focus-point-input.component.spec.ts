import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPointInputComponent } from './focus-point-input.component';

describe('FocusPointInputComponent', () => {
  let component: FocusPointInputComponent;
  let fixture: ComponentFixture<FocusPointInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusPointInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusPointInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
