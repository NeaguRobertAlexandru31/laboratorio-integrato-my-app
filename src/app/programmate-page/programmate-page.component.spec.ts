import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammatePageComponent } from './programmate-page.component';

describe('ProgrammatePageComponent', () => {
  let component: ProgrammatePageComponent;
  let fixture: ComponentFixture<ProgrammatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammatePageComponent]
    });
    fixture = TestBed.createComponent(ProgrammatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
