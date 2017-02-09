import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, length: number): string {    
    return _(value)
      .take(length)
      .concat("...")
      .join("");
  }

}
