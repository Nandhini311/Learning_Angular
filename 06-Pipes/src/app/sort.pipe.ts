import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc'){
    const sorted = [...value];
    //creates a shallow copy of the value arry and store it in a new variable called sorted
    //[...value] is the spread syntax  
    sorted.sort((a, b) =>{
      //sort is a inbuit method which converts the elements to strings and sorts alphabetically 
      //we are using a custom comparator function to sort the value  
      if(direction === 'asc'){
        return a>b ? 1: -1; //how the comparison should be done. 
        //if(result is less than 0, a comes before b)
      }
      else{
        return a>b? -1: 1;
      }
    });
    return sorted;
  }

}
