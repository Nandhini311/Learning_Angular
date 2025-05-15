import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//@Input - decorator. 
//input - signal. 

// type User = {  
//   id: string, 
//   avatar: string, 
//   name: string
// }

//another way to create an object 

//you can only define object types. 
//you can define other types also in type. 

//type or interface - doesn't matter in many situation, interfaces most commonly used. 

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})

export class UserComponent {

  /**@Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string; //this Input decorator makes this avatar property settable from outside. 
  //mentioning the type of this property -> otherwise throws "any" type error. 
  //getting "this property has no initializer", typescript doesn't understand that we are getting the value using angular. 
  //fix this by adding ! (to tell typecript that a value will be set for this for sure)
  @Input({required: true}) name!:string;**/

  @Input({required: true}) user!:User;
  @Input({required: true}) selected!: boolean;
  
  get imagePath(){   
    return 'assets/users/'+ this.user.avatar; }


  //now we are learning to display the tasks of each user, output
  @Output() select = new EventEmitter<string>(); 
  //here we have created a custom event select, which the parent (app component) can listen to.

  //using output function, essentially the same. 
  //select = output<string>(); //mention the type of the data which will be emitted by this. 

  onSelectUser(){
    //this is the function that is triggered when we click on an user. 
    this.select.emit(this.user.id); //emitting a new value using this select. 
  }
 
}


//using signal inputs. 

  //avatar = input.required<string>(); 
  //this tells that avatar should be an input for this component. 
  //by passing somethign in the () - you are assigning a default value if no value is assigned. 
  //when you don't pass any value, it will undefined. 
  // you can tell angular that eventually an input of certain type will be provided by <datatype>

  //name = input.required<string>(); //undefined initial value. 
  //<string> telling typescript that this will receive a string type input. 
  //tells angular that these two are inputs for this component. 
  //.required to ensure that this value is not left undefined. you cannot set an initial value 


  //imagePath = computed (()=>'assets/users'+ this.avatar());
  