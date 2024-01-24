import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoopsdataComponent } from './hoopsdata.component';

describe('HoopsdataComponent', () => {
  let component: HoopsdataComponent;
  let fixture: ComponentFixture<HoopsdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoopsdataComponent]
    });
    fixture = TestBed.createComponent(HoopsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
