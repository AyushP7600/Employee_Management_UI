import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../employee-data-service.service';

@Component({
  selector: 'app-delete-employe-data',
  templateUrl: './delete-employe-data.component.html',
  styleUrls: ['./delete-employe-data.component.css']
})
export class DeleteEmployeDataComponent {
  constructor(private service : EmployeeDataServiceService) { }

  data:any = {
    id: ""
  }
  deleteEmployee(id:any)
  {
    this.service.deleteEmployeeData(this.data.id).subscribe(
      (sucess)=>
    {

      this.data.id = (sucess)
    },
    (error)=>
    {
      window.alert(error)
    }

    )

  }
}
