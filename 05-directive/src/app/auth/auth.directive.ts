import { Directive, input, inject, effect, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

//when we import TemplateRef, we are telling Angular that this directive will be used on ng-template 
@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef); //to get a hold of that, we are initializing a reference (access to the content of the place)
  private viewContainerRef = inject(ViewContainerRef); //reference to the place in the DOM where this template is being used. (location - where the template is used)

  constructor() { 
    effect(()=>{
      if(this.authService.activePermission()=== this.userType()){
        console.log('SHOW ELEMENT');
        this.viewContainerRef.createEmbeddedView(this.templateRef);
        //method that will tell angular to render some content in the DOM
      }
      else{
        console.log('DO NOT SHOW ELEMENT'); 
        this.viewContainerRef.clear();
      }
    }); //to run some code whenever some signal value changes. 

  }

}
