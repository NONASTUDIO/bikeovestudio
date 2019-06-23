import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasyComponent } from './trasy.component';

describe('TrasyComponent', () => {
  let component: TrasyComponent;
  let fixture: ComponentFixture<TrasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
