import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinRowComponent } from './pin-row.component';

describe('PinRowComponent', () => {
  let component: PinRowComponent;
  let fixture: ComponentFixture<PinRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
