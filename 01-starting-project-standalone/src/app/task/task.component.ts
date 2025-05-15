import { Component, Input} from "@angular/core";
import { TaskListComponent } from "./task-list/task-list.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData } from "./task-list/task-list.model";
import { TaskService } from "./task.service";
//since this is a class it needs to be intantiated first. 

@Component({
    selector: 'app-task',
    imports: [TaskListComponent, AddTaskComponent],
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
    standalone: true
})
  
export class TaskComponent{
    //@Input()name?: string;
    @Input({required: true}) name!: string;
    @Input({required: true}) userId!: string;
    isAddTask: boolean = false;

    //will be automatically executed by angular. 
    constructor(private taskService: TaskService){} //automatically will create a property of same name. 
    //for now TaskService instance to be available in rest of the class, we have to store in a property. 
    //we can do this privae taskService = new TaskService(); 
    
    //private taskService = new TaskService();
    //small problem with this is that, every time you will need an instance of TaskService (even in other component), you will have to create it manually, 
    //that's where dependency injection comes in picture. (have a constructor created for this TaskService Class)
    
    get selectedUserTasks(){
        return this.taskService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string){
        this.taskService.removeTask(id);
    }

    onStartAddTask(){
        this.isAddTask = true;
    }

     onCloseAddTask(){
        this.isAddTask = false;
     }

     onAddTask(taskData: NewTaskData){
        this.taskService.addTask(taskData, this.userId);
     }

}


