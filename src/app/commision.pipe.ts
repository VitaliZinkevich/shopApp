import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commision'
})
export class CommisionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let tmp = value

    tmp = Math.floor (tmp * 1.1)   

    return  tmp
  }

}
