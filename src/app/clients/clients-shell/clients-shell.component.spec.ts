import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsShellComponent } from './clients-shell.component';

describe('ClientsShellComponent', () => {
  let component: ClientsShellComponent;
  let fixture: ComponentFixture<ClientsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
