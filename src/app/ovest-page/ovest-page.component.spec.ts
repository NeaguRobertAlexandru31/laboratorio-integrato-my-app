import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvestPageComponent } from './ovest-page.component';

describe('OvestPageComponent', () => {
  let component: OvestPageComponent;
  let fixture: ComponentFixture<OvestPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OvestPageComponent]
    });
    fixture = TestBed.createComponent(OvestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
