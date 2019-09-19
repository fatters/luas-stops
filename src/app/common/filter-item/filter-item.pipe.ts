import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterItemPipe',
})
export class FilterItemPipe implements PipeTransform {

  transform(value: any, input: string) {
    if (input) {
      const formattedInput = input.toLowerCase().trim();
      return value.filter((el) => {
        return el.name.toLowerCase().indexOf(formattedInput) > -1;
      });
    }
    return value;
  }
}
