import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../taks.services';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {

  private tasksService = inject(TasksService); //alternative dependency injection. 
  private selectedFilter = signal<string>('all');
  //tasks = this.tasksService.allTasks;
  tasks = computed(()=>{
    switch(this.selectedFilter()){
      case 'all': 
          return this.tasksService.allTasks(); //allTasks is the duplicate one in readaoble only format. 
      case 'open':
          return this.tasksService.allTasks().filter((task)=>{
             task.status === 'OPEN'
          });
      case 'in-progress':
          return this.tasksService.allTasks().filter((task)=>
            task.status === 'IN_PROGRESS'); 
      case 'done':
          return this.tasksService.allTasks().filter((task)=>
            task.status === 'DONE');     
      default: 
          return this.tasksService.allTasks();          
    }
  });

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
