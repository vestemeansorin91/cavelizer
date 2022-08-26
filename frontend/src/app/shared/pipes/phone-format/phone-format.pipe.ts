import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormatPipe'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(rawNum: string) {
    rawNum = '+40' + rawNum;

    const countryCodeStr = rawNum.slice(0, 3);
    const areaCodeStr = rawNum.slice(3, 6);
    const midSectionStr = rawNum.slice(6, 9);
    const lastSectionStr = rawNum.slice(9);

    return `${countryCodeStr} ${areaCodeStr} ${midSectionStr} ${lastSectionStr}`;
  }
}
