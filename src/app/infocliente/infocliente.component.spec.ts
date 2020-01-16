import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoclienteComponent } from './infocliente.component';

describe('InfoclienteComponent', () => {
  let component: InfoclienteComponent;
  let fixture: ComponentFixture<InfoclienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoclienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
