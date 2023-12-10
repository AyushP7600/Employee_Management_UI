import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../employee-data-service.service';

@Component({
  selector: 'app-update-employe-data',
  templateUrl: './update-employe-data.component.html',
  styleUrls: ['./update-employe-data.component.css']
})
export class UpdateEmployeDataComponent {
  constructor(private service : EmployeeDataServiceService) { }

  empId:number=0

  data:any = {

    name :  "",
    DOB :  "",
    contact :  "",
    companyName :  "",
    joiningDate :  "",
    designation :  "",
    project :  "",
    manager :  "",
    salary :  "",

   }
updateEmpData()
{
  this.service.updateEmployeeData(this.data,this.empId).subscribe(
  (sucess) => {
    window.alert(sucess)
  },
(error) =>
{
  window.alert(error)
}
)
}

}
