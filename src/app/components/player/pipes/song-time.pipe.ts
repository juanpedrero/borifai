import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'songTime' })
export class SongTime implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value - (minutes * 60));
    let secondsFixed: string;
    if(seconds < 10) {
      secondsFixed = `0${seconds}`;
    } else {
      secondsFixed = `${seconds}`;
    };
    return `${minutes}:${secondsFixed}`;
  }
}
