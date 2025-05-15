// import {  NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TaskComponent } from './task/task.component';

// @NgModule({
//     declarations: [AppComponent, HeaderComponent], //declare and register all the components that need to work together. 
//     //if you add a component to this NgModule - it cannot be standalone
//     //doesn't know which is the root component when there are multiple components. 
//     //so to the root module, you need to add a special configuration
//     bootstrap: [AppComponent], //to telling which is the root component. 
//     imports: [BrowserModule, UserComponent, TaskComponent] //for using the standalone components. 
// }) 

// //Module - for grouping configurations together
// export class AppModule{}

// //all the errors are removed but the content is not displayed, 
// //error -> clue: if you are bootstrapping an NgModule, ensuure to have imported `BrowserModule`.
