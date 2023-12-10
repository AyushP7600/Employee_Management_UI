import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../employee-data-service.service';

@Component({
  selector: 'app-get-employe-data-by-id',
  templateUrl: './get-employe-data-by-id.component.html',
  styleUrls: ['./get-employe-data-by-id.component.css']
})
export class GetEmployeDataByIdComponent {
  constructor(private service: EmployeeDataServiceService){

  }


  data:any = {
    id: ""
  }
resp:any

  getEmployee()
{
  this.service.getEmployeDataById(this.data.id).subscribe(

      (sucess) => {
        window.alert("sucess")

        this.resp= sucess
        console.log(this.resp)

      },
    (error) =>
    {
      window.alert("error")
    }
  )

}
}

