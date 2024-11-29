import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPointImageComponent } from './focus-point-image.component';

describe('FocusPointImageComponent', () => {
  let component: FocusPointImageComponent;
  let fixture: ComponentFixture<FocusPointImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FocusPointImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusPointImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
