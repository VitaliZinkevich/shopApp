import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commision'
})
export class CommisionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
