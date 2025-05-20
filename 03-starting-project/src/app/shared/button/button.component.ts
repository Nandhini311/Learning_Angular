import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  //now only the buttons with this appButton attribute will work  
  //you can combine it with our selectors 
  //what is this? button.button -> buttons that have a class button on them. 
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
