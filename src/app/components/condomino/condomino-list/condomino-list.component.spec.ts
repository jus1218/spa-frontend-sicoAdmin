import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominoListComponent } from './condomino-list.component';

describe('CondominoListComponent', () => {
  let component: CondominoListComponent;
  let fixture: ComponentFixture<CondominoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
