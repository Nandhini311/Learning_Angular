import { Component, Input, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',


})
export class DashboardItemComponent {
  //@Input({required: true}) image !: { src: string, alt: string};
  //@Input({required: true}) title !: string;
  title = input.required();
  image = input.required<{src: string, alt: string}>(); 
  //will be an image signal, so access it like accessing a method

}
