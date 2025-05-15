import {Component} from '@angular/core';
// We are importing the @Component decorator from Angular's core package.
// This allows us to define this class as an Angular component.

@Component({  //for passing configuration object
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    //if we are using styleUrl - the input must be given as array. 
    
})


export class HeaderComponent{}
//this will allow this to be imported by other components.
