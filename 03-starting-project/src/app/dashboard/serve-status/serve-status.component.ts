import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve-status',
  standalone: true,
  imports: [],
  templateUrl: './serve-status.component.html',
  styleUrl: './serve-status.component.css'
})
export class ServeStatusComponent implements OnInit{ 
  //implementing an interface ensures that you are defining the ngOnInit() method 
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  //values it can take. 

  //this constructor gets called whenever the component is created, 
  // before the view is rendered. 
  //constructor()
    ngOnInit(){
    setInterval(() =>{
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus = 'online'; 
      }
      else if(rnd < 0.9 ){
        this.currentStatus = 'offline';
      }
      else{
        this.currentStatus = 'unknown';
      }
    }
    , 5000);
  }
}
