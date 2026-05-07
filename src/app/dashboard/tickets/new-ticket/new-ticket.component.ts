import { Component, ElementRef, ViewChild , OnInit , AfterViewInit, Output, EventEmitter } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit , AfterViewInit{
@ViewChild('form') form?:ElementRef<HTMLFormElement>;
@Output() add = new EventEmitter<{title:string , text:string}>()

titleInput!:string ;
textInput!:string;
ngOnInit(){
  console.log("on Init")
  console.log(this.form);
  
}

ngAfterViewInit(): void {
  console.log("after view init");
  console.log(this.form);
  
  
}

onSubmit(titleInput:string , textInput:string ){
  console.log(`${titleInput}          ${textInput}`);
  this.form?.nativeElement.reset();
  this.add.emit({title:titleInput , text:textInput})
  
  
}
}
