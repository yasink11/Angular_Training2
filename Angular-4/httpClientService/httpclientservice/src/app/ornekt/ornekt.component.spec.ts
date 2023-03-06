import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrnektComponent } from './ornekt.component';

describe('OrnektComponent', () => {
  let component: OrnektComponent;
  let fixture: ComponentFixture<OrnektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrnektComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrnektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
