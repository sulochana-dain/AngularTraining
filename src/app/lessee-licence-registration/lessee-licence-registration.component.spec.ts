import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeLicenceRegistrationComponent } from './lessee-licence-registration.component';

describe('LesseeLicenceRegistrationComponent', () => {
  let component: LesseeLicenceRegistrationComponent;
  let fixture: ComponentFixture<LesseeLicenceRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseeLicenceRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeLicenceRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
