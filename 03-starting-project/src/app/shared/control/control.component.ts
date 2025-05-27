import { 
  Component, 
  ElementRef, 
  input, 
  ViewEncapsulation, 
  inject,
  ContentChild,
  contentChild,
  afterRender, 
  afterNextRender} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //View encapsulation controls how styles defined in a component affect the DOM. (only to that component, leaks out to affect other components or vice versa )
  //takes view as input -> enums (collections of values)

  // Emulated (default) – styles are scoped to the component using special HTML attributes.
  // It does not use the real Shadow DOM, but Angular emulates the same behavior.
  //None - Styles are global - they affect everything. 
  //ShowDOM -> uses real native Shadow DOM for Style isolation. 
  host: {
    class: 'control',
    '(click)': 'onClick()'
    
  }
})

export class ControlComponent {

  constructor(){
    afterRender(()=>{
      console.log('afterRender');
    })

    afterNextRender(()=>{
      console.log('afterNextRender');
    })
  }
  //@HostBinding('class') className = 'control';
  //discouraged though, exists only for backward compatibility 
   label = input.required<string>();
   private el = inject(ElementRef);
   //ElementRef for referencing to any element on the page. 
   //by injecting this in to the component, angular gives you access to the host element of the component 
   @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

   //now let's try using the function. 

   private control_1 = 
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  //must be accessed as a function - control_1()

  // @HostListener('click')
  onClick() {
    console.log('Control component clicked!');
    console.log(this.el); //this will be app.control element, 
  }
}

  
