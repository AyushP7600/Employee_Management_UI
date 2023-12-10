import { Component } from '@angular/core';
import { EmployeeDataServiceService } from '../employee-data-service.service';

@Component({
  selector: 'app-get-employe-data',
  templateUrl: './get-employe-data.component.html',
  styleUrls: ['./get-employe-data.component.css']
})
export class GetEmployeDataComponent {
constructor(private service: EmployeeDataServiceService)
{

}

ngOnInit():void
{
this.getAllData()
}

data:any

getAllData()
{
  this.service.getEmployeeData().subscribe(
    (sucess)=>
    {
      console.log("hii")
      this.data = sucess
      console.log(this.data)
    },
    (error)=>
    {
      window.alert(error)
    }

    )


}



}
