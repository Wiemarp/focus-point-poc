import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPointModalComponent } from './focus-point-modal.component';

describe('FocusPointModalComponent', () => {
  let component: FocusPointModalComponent;
  let fixture: ComponentFixture<FocusPointModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusPointModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusPointModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
