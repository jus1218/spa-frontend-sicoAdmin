import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotaListComponent } from './cuota-list.component';

describe('CuotaListComponent', () => {
  let component: CuotaListComponent;
  let fixture: ComponentFixture<CuotaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuotaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
