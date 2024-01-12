import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstPageComponent } from './est-page.component';

describe('EstPageComponent', () => {
  let component: EstPageComponent;
  let fixture: ComponentFixture<EstPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstPageComponent]
    });
    fixture = TestBed.createComponent(EstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
