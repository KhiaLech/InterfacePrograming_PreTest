import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInfoComponentComponent } from './main-info-component.component';

describe('MainInfoComponentComponent', () => {
  let component: MainInfoComponentComponent;
  let fixture: ComponentFixture<MainInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
