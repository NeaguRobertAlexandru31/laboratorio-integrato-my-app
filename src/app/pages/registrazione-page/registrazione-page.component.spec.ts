import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrazionePageComponent } from './registrazione-page.component';

describe('RegistrazionePageComponent', () => {
  let component: RegistrazionePageComponent;
  let fixture: ComponentFixture<RegistrazionePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrazionePageComponent]
    });
    fixture = TestBed.createComponent(RegistrazionePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
