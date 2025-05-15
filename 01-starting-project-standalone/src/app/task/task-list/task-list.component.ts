import { Component, EventEmitter, Input, Output } from '@angular/core';
import { taskObject } from './task-list.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, CardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input({required: true}) task!: taskObject;
  @Output() complete = new EventEmitter<string>();
 
  onCompleteTask(){
    this.complete.emit(this.task.id);
  }
}
