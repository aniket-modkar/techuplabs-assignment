import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinHeaderComponent } from './pin-header.component';

describe('PinHeaderComponent', () => {
  let component: PinHeaderComponent;
  let fixture: ComponentFixture<PinHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
