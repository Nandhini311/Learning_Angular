import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskComponent, UserComponent, HeaderComponent],
  //if you remove standalone, it will say that imports is only valid for standalone components 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  users = DUMMY_USERS; 

  selectedUserId?: string;
  //'u1'; //just default value.
  //this way you can expose the data in the template 
  //this is sent as a array, not wrapped around signal. so when imported use it as it is.
  onSelectUser(id: string){
    this.selectedUserId = id;
  } 

  get SelectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }
  //it gets the data emitted by the child and we can perform any operation we want. 
}
