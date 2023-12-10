import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeDataComponent } from './update-employe-data.component';

describe('UpdateEmployeDataComponent', () => {
  let component: UpdateEmployeDataComponent;
  let fixture: ComponentFixture<UpdateEmployeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateEmployeDataComponent]
    });
    fixture = TestBed.createComponent(UpdateEmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
