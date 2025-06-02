import { Injectable, signal } from "@angular/core";
import { EmployeeData } from "./employee.model";

@Injectable({
 providedIn: 'root',
}) //to ensure that this is available application wide. 


export class EmployeeService{
    private employees = signal<EmployeeData[]>([
        {id: 1, name: "Nandhini", email: "NandhiniS@fico.com", phone: 7708958502, designation: "Project Management Consultant II", department: "security", status: "Active"}
    ]);
    //we don't want everyone to manipulate this employees array, so let's make a copy of it and make it in readable format. 
    employeesReadOnly = this.employees.asReadonly();

    getEmployees(){
        return this.employeesReadOnly;
    }

    getEmployeesById(FindId: number) {
    return this.employeesReadOnly().find(emp => emp.id === FindId) || null;
     }

    addEmployee(emp: {
        name: string, 
        email: string, 
        phone: number, 
        designation: string, 
        department: string, 
        status: string
        }){

        const newEmployeeData = {
            ...emp,
            id : this.employees().length + 1,
            status: emp.status || 'New'
        }

         this.employees.update((oldEmployees) => {
            return [...oldEmployees, newEmployeeData];
        });

        console.log(this.employees);


    }

    updateEmployee(emp: { 
        id: number, 
        name: string, 
        phone: number, 
        designation: string, 
        department: string, 
        status: string
           })
       {
        this.employees.update(oldEmployees => oldEmployees.map(existingEmp =>
            existingEmp.id === emp.id? { ...existingEmp, ...emp }  : existingEmp              
        ));

    }

    deleteEmployee(id: number) {
       this.employees.update((oldEmployees) => {
       return oldEmployees.filter(emp => emp.id !== id);
    });
  }


}