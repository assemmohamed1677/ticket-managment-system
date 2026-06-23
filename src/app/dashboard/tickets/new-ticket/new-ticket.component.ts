import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
@ViewChild('form') form?:ElementRef<HTMLFormElement>;
@Output() add = new EventEmitter<{title:string , text:string}>()

titleInput = '';
textInput = '';

onSubmit(titleInput:string , textInput:string ){
  const title = titleInput.trim();
  const text = textInput.trim();

  if (!title || !text) {
    return;
  }

  this.form?.nativeElement.reset();
  this.titleInput = '';
  this.textInput = '';
  this.add.emit({title, text})
  
  
}
}
