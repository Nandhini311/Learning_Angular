import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../taks.services';
import { Task } from '../task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService: TasksService;
  
  constructor(tService: TasksService){ //stating that this is a dependency, instead of us instantiaing , we are making angular do it for us. 
    this.tasksService = tService; 
  }

  /**shorter way to do the same
   constructor(private tasksService: TasksService){} //this way you don't have to declare it seperately. 
  **/
 
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title: title, description: description})
    this.formEl()?.nativeElement.reset();
  }
}
