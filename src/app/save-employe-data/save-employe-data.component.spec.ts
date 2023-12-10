import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEmployeDataComponent } from './save-employe-data.component';

describe('SaveEmployeDataComponent', () => {
  let component: SaveEmployeDataComponent;
  let fixture: ComponentFixture<SaveEmployeDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveEmployeDataComponent]
    });
    fixture = TestBed.createComponent(SaveEmployeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
