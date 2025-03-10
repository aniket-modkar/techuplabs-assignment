import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinAddComponent } from './pin-add.component';

describe('PinAddComponent', () => {
  let component: PinAddComponent;
  let fixture: ComponentFixture<PinAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
