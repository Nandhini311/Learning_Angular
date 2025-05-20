import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { UserCalculatedValue } from './investment.model';
import {UserInvestmentData} from './investment.model';
import { calculateInvestmentResults } from '../investment-results';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserComponent, InvestmentResultsComponent]
})


export class AppComponent {
  //it will return a value, which you can import in your investment-results for displaying the results. 
  results?: UserCalculatedValue[];

  onCalculateInvestmentResults(data: UserInvestmentData){
    this.results = calculateInvestmentResults(data);
    console.log(this.results);
  }
}
