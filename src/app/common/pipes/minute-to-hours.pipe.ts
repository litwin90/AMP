import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'minuteToHours',
})
export class MinuteToHoursPipe implements PipeTransform {
    transform(minutes: number): string {
        const minutesTrimmed = minutes % 60;
        const hours = Math.floor(minutes / 60);
        return `${hours}h ${minutesTrimmed ? `${minutesTrimmed}min` : ''}`;
    }
}
