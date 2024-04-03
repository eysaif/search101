import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textmodifier'
})
export class TextmodifierPipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    const cleanText = value.replace(/[.]/g," ");
    return cleanText;
  }

}
