import { output, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true,  
})

export class TemperaturePipe implements PipeTransform{
    transform(value: string | number | null, inputType : 'cel' | 'fah', outType?: 'cel' | 'fah'){
        let val: number; 
        if(!value){
            return value;
        }
        if (typeof value === 'string'){
            val = parseFloat(value);
        }
        else{
            val = value;
        }

        let outputTemp: number;
        
        if(inputType === 'cel' && outType === 'fah'){
            outputTemp = val *(9/5) + 32; 
            return `${outputTemp.toFixed(2)}°F`;
        }
        else if(inputType === 'fah' && outType === 'cel'){
            outputTemp = (val-32)* (5/9);
             return `${outputTemp.toFixed(2)}°C`;
        }
        else{
            outputTemp = val;
            return outputTemp.toFixed(2);
        }
    }
    //all the pipes will need this. 
}