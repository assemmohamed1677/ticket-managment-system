import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
@Input({required:true}) newTicket!: Ticket;
detailsVisible =signal(false);
@Output() complete = new EventEmitter()

onToggle(){
  this.detailsVisible.set(!this.detailsVisible())
}

onComplete (){
  this.complete.emit(this.newTicket.id)
}



}
