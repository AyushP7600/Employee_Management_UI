import { GetEmployeDataByIdComponent } from './get-employe-data-by-id/get-employe-data-by-id.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeDataServiceService {

  constructor(private http : HttpClient) { }



saveEmployeeData(employeeData : any)
{
  return this.http.post("http://localhost:8080/sendEmployeeData" , employeeData)
}

getEmployeeData()
{
  return this.http.get("http://localhost:8080/getData")
}


getEmployeDataById(id:any)
{
  return this.http.get("http://localhost:8080/getEmployeeData/"+id)
}
deleteEmployeeData(id : any)
{
  return this.http.delete("http://localhost:8080/deleteEmpData/" +id)
}
updateEmployeeData(employeeData : any,id:number)
{
  return this.http.put("http://localhost:8080/updateEmployeeData/" +id, employeeData)
}
}
