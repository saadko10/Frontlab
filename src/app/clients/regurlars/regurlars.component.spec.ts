import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegurlarsComponent } from './regurlars.component';

describe('RegurlarsComponent', () => {
  let component: RegurlarsComponent;
  let fixture: ComponentFixture<RegurlarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegurlarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegurlarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
