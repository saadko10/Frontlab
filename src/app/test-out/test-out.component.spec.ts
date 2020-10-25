import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOutComponent } from './test-out.component';

describe('TestOutComponent', () => {
  let component: TestOutComponent;
  let fixture: ComponentFixture<TestOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
