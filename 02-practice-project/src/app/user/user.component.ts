import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInvestmentData } from '../investment.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Output() calculate = new EventEmitter<UserInvestmentData>();

   data: UserInvestmentData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 5,
    duration: 10,
   };

   onSubmit(){
    this.calculate.emit(this.data)
   }
   //emitting the data, so it can be picked up at the app-component for calculation. 
}
