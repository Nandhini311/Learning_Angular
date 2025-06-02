import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee/employee.service';
import { EmployeeData } from '../employee/employee.model';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-employe-form',
  imports: [FormsModule],
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css'],
  standalone: true
})
export class EmployeFormComponent {

  constructor(private employeeservice: EmployeeService){}

  @Input() existingEmployee: EmployeeData | null = null;
  isEditMode: boolean = false;
 
  enteredName: string = '';
  enteredDepartment: string = '';
  enteredEmail: string = '';
  enteredNumber: number | null = null;
  enteredDesignation: string = '';
  enteredStatus: string = '';


  onSubmit() {
    const employeeDataToSave = {
      id: this.existingEmployee ? this.existingEmployee.id : 0, 
      name: this.enteredName,
      email: this.enteredEmail,
      phone: this.enteredNumber as number, 
      designation: this.enteredDesignation,
      department: this.enteredDepartment,
      status: this.enteredStatus
    };

    if (!employeeDataToSave.name || !employeeDataToSave.email || employeeDataToSave.phone === null || !employeeDataToSave.designation || !employeeDataToSave.department) {
      alert('Please fill in all fields!');
      return;
    }

    
    this.enteredName = '';
    this.enteredDepartment = '';
    this.enteredEmail = '';
    this.enteredNumber = null;
    this.enteredDesignation = '';

     if (this.isEditMode) {
    this.employeeservice.updateEmployee(employeeDataToSave);
  } else {
    this.employeeservice.addEmployee(employeeDataToSave);
  }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['existingEmployee'] && this.existingEmployee) {
      this.enteredName = this.existingEmployee.name;
      this.enteredEmail = this.existingEmployee.email;
      this.enteredNumber = this.existingEmployee.phone;
      this.enteredDesignation = this.existingEmployee.designation;
      this.enteredDepartment = this.existingEmployee.department;
      this.enteredStatus = this.existingEmployee.status;
      this.isEditMode = true;
    }}
}
