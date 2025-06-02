import { Component, EventEmitter, Input, Signal, Output } from '@angular/core';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeData } from '../employee/employee.model';
import { EmployeFormComponent } from '../employe-form/employe-form.component';


@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})


export class EmployeeListComponent {
  employees!: Signal<EmployeeData[]>;
  @Input() add = new EventEmitter();
  @Output() edit = new EventEmitter<EmployeeData>();

  constructor(private employeeservice: EmployeeService){}
   
   ngOnInit(): void {
    // Use the signal like a function
    this.employees = this.employeeservice.getEmployees();
  }

  updateData(emp: EmployeeData){
    console.log("This is for updating the data ");
    this.edit.emit(emp);
  }

  deleteData(empid: number){
    this.employeeservice.deleteEmployee(empid);
  }



  closeModal(){
    this.add.emit();
  }

}
