import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominoRegisterComponent } from './condomino-register.component';

describe('CondominoRegisterComponent', () => {
  let component: CondominoRegisterComponent;
  let fixture: ComponentFixture<CondominoRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominoRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominoRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
