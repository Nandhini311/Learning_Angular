import { Component, Input } from '@angular/core';
import { Ticket } from './tickets.model';
import { NewTicketComponent } from "../new-ticket/new-ticket.component";
import { TicketComponent } from '../ticket/ticket.component';
@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets: Ticket[] = []; //tickets will be a array of ticket object 
  //to store the tickets submitted by the user. 
  onAdd(ticketData: {title: string; text: string}){
    const ticket: Ticket = {
      id: Math.random().toString(),
      status: 'open',
      title: ticketData.title,
      request: ticketData.text
    }
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string){
    this.tickets = this.tickets.map((ticket)=> 
      {
      if(ticket.id === id){
        return {...ticket, status: 'closed'}
      }

      return ticket;
    });
  }
}
