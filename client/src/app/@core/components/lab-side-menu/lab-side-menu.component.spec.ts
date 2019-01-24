import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSideMenuComponent } from './lab-side-menu.component';

describe('LabSideMenuComponent', () => {
  let component: LabSideMenuComponent;
  let fixture: ComponentFixture<LabSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
