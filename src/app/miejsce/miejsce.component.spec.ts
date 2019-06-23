import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiejsceComponent } from './miejsce.component';

describe('MiejsceComponent', () => {
  let component: MiejsceComponent;
  let fixture: ComponentFixture<MiejsceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiejsceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiejsceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
