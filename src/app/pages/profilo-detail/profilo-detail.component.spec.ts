import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloDetailComponent } from './profilo-detail.component';

describe('ProfiloDetailComponent', () => {
  let component: ProfiloDetailComponent;
  let fixture: ComponentFixture<ProfiloDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfiloDetailComponent]
    });
    fixture = TestBed.createComponent(ProfiloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
