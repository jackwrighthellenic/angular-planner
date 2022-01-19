import { Injectable } from '@angular/core';

@Injectable()
export class Utils {
  /**
   * Generate a number between a range of two numbers.
   */
  randomRange(start: number, end: number) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  }
}
