import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EmployeFormComponent } from "./employe-form/employe-form.component";
import { HeaderComponent } from "./header/header.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { FormsModule } from '@angular/forms';
import { EmployeeData } from './employee/employee.model';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  imports: [EmployeFormComponent, HeaderComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-directory';
  @Output() edit = new EventEmitter();
  @Input() newData!: EmployeeData;

   selectedEmployee: EmployeeData | null = null;

  constructor(private employeeservice: EmployeeService){}

   onEdit(emp: EmployeeData) {
    this.selectedEmployee = emp;
  }

  onCloseForm(){
     this.selectedEmployee = null;
     this.edit.emit(); 
  }

  onFormSubmit(){
  this.selectedEmployee = null;

  }
}
