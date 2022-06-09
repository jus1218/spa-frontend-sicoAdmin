import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaRegisterComponent } from './cuota-register.component';

describe('CuotaRegisterComponent', () => {
  let component: CuotaRegisterComponent;
  let fixture: ComponentFixture<CuotaRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotaRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
