import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveEmployeDataComponent } from './save-employe-data/save-employe-data.component';
import { GetEmployeDataComponent } from './get-employe-data/get-employe-data.component';
import { GetEmployeDataByIdComponent } from './get-employe-data-by-id/get-employe-data-by-id.component';
import { DeleteEmployeDataComponent } from './delete-employe-data/delete-employe-data.component';
import { UpdateEmployeDataComponent } from './update-employe-data/update-employe-data.component';

const routes: Routes = [

  {path:"saveEmployee" , component : SaveEmployeDataComponent},
  {path:"getEmployees" , component : GetEmployeDataComponent},
  {path:"getEmployeeById" , component : GetEmployeDataByIdComponent},
  {path:"deleteEmployee" , component : DeleteEmployeDataComponent},
  {path:"updateEmployee" , component : UpdateEmployeDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
