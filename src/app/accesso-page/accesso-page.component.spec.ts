import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoPageComponent } from './accesso-page.component';

describe('AccessoPageComponent', () => {
  let component: AccessoPageComponent;
  let fixture: ComponentFixture<AccessoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessoPageComponent]
    });
    fixture = TestBed.createComponent(AccessoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
