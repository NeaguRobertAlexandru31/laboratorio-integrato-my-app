import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitiPageComponent } from './preferiti-page.component';

describe('PreferitiPageComponent', () => {
  let component: PreferitiPageComponent;
  let fixture: ComponentFixture<PreferitiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreferitiPageComponent]
    });
    fixture = TestBed.createComponent(PreferitiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
