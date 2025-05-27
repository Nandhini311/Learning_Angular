import { Directive, ElementRef, input, inject } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host:{
        '(click)': 'onConfirmLeavePage($event)'
        //telling angular to listen to the click event on the host element and sending the mouse event as input.
    }
})
 //decorator must be added,
export class SafeLinkDirective{
    queryParam = input('myapp'); //myapp is the default (fallback value)
   

    constructor(){
        console.log('SafeLink is active')
    }

     private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
    //HostElementRef is a wrapper provided by Angular. 

    onConfirmLeavePage(event: MouseEvent){
        const wantsToLeave = window.confirm('Do you want to leave the application ? ');
        //a method built in the browser. 
        if(wantsToLeave){
            const address = this.hostElementRef.nativeElement.href;
            this.hostElementRef.nativeElement.href = address + "?from=" + this.queryParam();
            //hostElementRef.nativeElement is the actual DOM.
            //working with inputs in customDirectives 
            //const address = (event.target as HTMLAnchorElement).href;
            //event.target will refer to the actual DOM element that triggered the event, 
            //we know that this event was triggered by click on the link (coming from the anchor tag, so we will type cast it)
            //(event.target as HTMLAnchorElement).href = address + "?from=" + this.queryParam;
            return;
        }
        event.preventDefault();
        //preventDefault will stop the browser from navigating to that URL
    }
}