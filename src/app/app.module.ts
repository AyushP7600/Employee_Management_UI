import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaveEmployeDataComponent } from './save-employe-data/save-employe-data.component';
import { DeleteEmployeDataComponent } from './delete-employe-data/delete-employe-data.component';
import { UpdateEmployeDataComponent } from './update-employe-data/update-employe-data.component';
import { GetEmployeDataComponent } from './get-employe-data/get-employe-data.component';
import { GetEmployeDataByIdComponent } from './get-employe-data-by-id/get-employe-data-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    SaveEmployeDataComponent,
    DeleteEmployeDataComponent,
    UpdateEmployeDataComponent,
    GetEmployeDataComponent,
    GetEmployeDataByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
