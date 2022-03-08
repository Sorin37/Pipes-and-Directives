import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'repeat'
})
export class RepeatPipe implements PipeTransform {

  transform(value: string, nrOfTimes: number): string {
    let result:string = "";
    for(let i=0; i<nrOfTimes;i++){
      result += value;
    }
    return result;
  }

}
