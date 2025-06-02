import {Injectable, signal } from '@angular/core'
import { Task, TaskStatus } from './task.model';

@Injectable({
    providedIn: 'root' //to make this service avaiable for the whole application 
}
) 
//deocrator tells angular that this class can be used as a dependency 
//have dependencies injected into it.
export class TasksService{
    private tasks = signal<Task[]>([]);
    allTasks = this.tasks.asReadonly() // so that this data cannot be manipulated outside this class 

    addTask(taskData: {title: string, description: string}){
        const newTask = {
            ...taskData, 
            id: Math.random().toString(), 
            status: 'OPEN' as TaskStatus
        };
        this.tasks.update((oldTasks)=>[...oldTasks, newTask]);
        console.log(this.tasks);
        //updating the current task with the function provided, 
        //the function is taking the oldTask and copying it and adding new Task to it and returning it. 
    }

    updateTaskStatus(taskId: string, newStatus: TaskStatus){
        //update is an angular's signal update function
        //it lets you modify the signal's current value in an immutable way 
        this.tasks.update((oldTasks) => //oldTasks will be current array of all tasks
            oldTasks.map((task)=> //map function goes through every item and applies the given function to each items
                task.id === taskId ? {...task, status: newStatus }: task))
                //if the task id is same, it copies the data and updates the new status for it, if not, task remains the same. 
    }
} 