import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifichePageComponent } from './classifiche-page.component';

describe('ClassifichePageComponent', () => {
  let component: ClassifichePageComponent;
  let fixture: ComponentFixture<ClassifichePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassifichePageComponent]
    });
    fixture = TestBed.createComponent(ClassifichePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
