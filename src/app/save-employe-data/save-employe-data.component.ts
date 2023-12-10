import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../employee-data-service.service';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-save-employe-data',
  templateUrl: './save-employe-data.component.html',
  styleUrls: ['./save-employe-data.component.css']
})
export class SaveEmployeDataComponent {
  constructor(private service : EmployeeDataServiceService) { }

 data = {
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



  saveEmployeData()
  {

   this.service.saveEmployeeData(this.data).subscribe(

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

