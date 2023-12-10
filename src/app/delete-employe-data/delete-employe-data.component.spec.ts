import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmployeDataComponent } from './delete-employe-data.component';

describe('DeleteEmployeDataComponent', () => {
  let component: DeleteEmployeDataComponent;
  let fixture: ComponentFixture<DeleteEmployeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteEmployeDataComponent]
    });
    fixture = TestBed.createComponent(DeleteEmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
