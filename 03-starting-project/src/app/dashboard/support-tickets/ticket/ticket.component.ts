import { Component, input, signal, output} from '@angular/core';
import { Ticket } from '../tickets/tickets.model';
import { TicketsComponent } from '../tickets/tickets.component';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();
  

  onToggleDetails(){
    this.detailsVisible.update((wasVisible)=>(!wasVisible))
  }

  onMarkAsCompleted(){
     this.close.emit();
  }


}
