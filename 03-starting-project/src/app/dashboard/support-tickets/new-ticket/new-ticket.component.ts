import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Ticket } from '../tickets/tickets.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //onSubmit(titleElement: HTMLInputElement){
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //@ViewChild('form') form_2?: HTMLFormElement; //won't throw error but won't work as expected. 
  //this not how angular provides the reference as , it provides the reference as a ElementRef
  //ViewChild needs selector as an argument, 
  // you can put the class name too - view child will look for an instance of this component. 

  //viewChild as a function
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');//returns a signal


    ngOnInit() {
      console.log('ONINIT');
      console.log(this.form?.nativeElement);
    }

    ngAfterViewInit(){
      console.log('AFTER VIEW INIT');
      console.log(this.form?.nativeElement);
    }
    
    @Output() add = new EventEmitter<{title: string; text: string}>();
  //when you want to send data from child to parent. 
  
  //used to select elements from the component. 
  onSubmit(title: string, ticketText: string){
    //before resetting, add the values to the array, 
    this.add.emit({title: title, text: ticketText});
    this.form?.nativeElement.reset();


    //we are getting the parameter here, HTMLInputElement -> type that refers to the input tagin HTML 
    //describes the underlying DOM element (which is input here)
    //console.log(titleElement);
    //shows the html view - logs the element to the console
    //console.dir(titleElement);
    //logs the javascript object representation of the element. 
    //collapsible list of properties and method belonging to the element. 
    //titleElement.title
    console.log(title);
    console.log(ticketText);
    //if(this.form!= undefined){this.form.nativeElement.reset();}
    //these two are same, traditional if statement 
    //chaining 
  }

  
  
}
