import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';


@Component({
  selector: 'app-serve-status',
  standalone: true,
  imports: [],
  templateUrl: './serve-status.component.html',
  styleUrl: './serve-status.component.css'
})
export class ServeStatusComponent implements OnInit{ 
  //implementing an interface ensures that you are defining the ngOnInit() method 
  currentStatus = signal< 'online' | 'offline' | 'unknown'>('offline');
  //it just means that these are the only values this signal can take and the initial value is offline. 

  //private interval?: NodeJS.Timeout;
  private destroyRef = inject(DestroyRef);

  //this constructor gets called whenever the component is created, 
  // before the view is rendered. 
  //constructor()
    ngOnInit(){ //runs only once after all the components are initialized. 
    const interval = setInterval(() =>{ //setInterval on the other hand is a javascript global timer and exists independently of angular. 
      //so even if the angular removes the component from the DOM, the javascript timer is still running in the background. 
      //we can stop this with the help of ngOnDestroy
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus.set('online');
      }
      else if(rnd < 0.9 ){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown');
      }
    }
    , 5000);

      this.destroyRef.onDestroy(()=>{
        console.log("time is getting destroyed now")
        clearInterval(interval);
      })
    }

    constructor(){
      effect((): void => {
      console.log('Status changed to:', this.currentStatus());
      });
    }

    // ngOnDestroy(){
    //   clearInterval(this.interval);
    // }
}
