import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatiPageComponent } from './risultati-page.component';

describe('RisultatiPageComponent', () => {
  let component: RisultatiPageComponent;
  let fixture: ComponentFixture<RisultatiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisultatiPageComponent]
    });
    fixture = TestBed.createComponent(RisultatiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
