import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeDataByIdComponent } from './get-employe-data-by-id.component';

describe('GetEmployeDataByIdComponent', () => {
  let component: GetEmployeDataByIdComponent;
  let fixture: ComponentFixture<GetEmployeDataByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeDataByIdComponent]
    });
    fixture = TestBed.createComponent(GetEmployeDataByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
