import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeDataComponent } from './get-employe-data.component';

describe('GetEmployeDataComponent', () => {
  let component: GetEmployeDataComponent;
  let fixture: ComponentFixture<GetEmployeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEmployeDataComponent]
    });
    fixture = TestBed.createComponent(GetEmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
