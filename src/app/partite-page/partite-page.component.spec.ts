import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitePageComponent } from './partite-page.component';

describe('PartitePageComponent', () => {
  let component: PartitePageComponent;
  let fixture: ComponentFixture<PartitePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartitePageComponent]
    });
    fixture = TestBed.createComponent(PartitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
