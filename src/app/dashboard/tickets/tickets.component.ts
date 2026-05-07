import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";
import { Ticket } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
tickets:Ticket[]=[];


onAdd(ticketData:{title:string , text:string}){
const newTicket:Ticket = {
  title: ticketData.title,
  request:ticketData.text,
  id:Math.random().toString(),
  status:'open'
}
this.tickets.push(newTicket);

}
onComplete(ticketId:string){
const completedTicket  = this.tickets.find((ticket)=>ticket.id === ticketId)
completedTicket!.status = 'closed'
}

}
