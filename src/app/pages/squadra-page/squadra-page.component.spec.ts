import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadraPageComponent } from './squadra-page.component';

describe('RisultatiPageComponent', () => {
  let component: SquadraPageComponent;
  let fixture: ComponentFixture<SquadraPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquadraPageComponent]
    });
    fixture = TestBed.createComponent(SquadraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});