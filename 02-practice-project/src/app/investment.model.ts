export interface UserInvestmentData{
     initialInvestment: number, 
    duration: number, 
    expectedReturn: number, 
    annualInvestment:number
}


export interface UserCalculatedValue{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number;
}