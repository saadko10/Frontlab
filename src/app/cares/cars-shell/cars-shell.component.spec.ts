import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsShellComponent } from './cars-shell.component';

describe('CarsShellComponent', () => {
  let component: CarsShellComponent;
  let fixture: ComponentFixture<CarsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
