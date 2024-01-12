import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDownComponent } from './navbar-down.component';

describe('NavbarDownComponent', () => {
  let component: NavbarDownComponent;
  let fixture: ComponentFixture<NavbarDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDownComponent]
    });
    fixture = TestBed.createComponent(NavbarDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
