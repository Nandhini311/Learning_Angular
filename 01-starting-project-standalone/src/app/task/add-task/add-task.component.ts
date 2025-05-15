import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task-list/task-list.model';
import { TaskService } from '../task.service';
import { inject, Input } from '@angular/core';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() close = new EventEmitter<void>();
  //@Output() add = new EventEmitter<NewTaskData>();
  @Input({required: true}) userId!: string;

  private taskService = inject(TaskService) 
  //injects a dependency and provides it as a value for this class. 

  eneteredTitle = ''; //to store the title value.
  enteredSummary = '';
  enteredDate = ''; 


  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    //this.add.emit({})
      this.taskService.addTask({
      title: this.eneteredTitle, 
      summary: this.enteredSummary,
      date: this.enteredDate
      }, this.userId)
      this.close.emit();
  }
}
