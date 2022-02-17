import {Injectable} from '@angular/core';

@Injectable()
export class DemoService {
  randomNumber: number;

  constructor() {
    console.log('DemoService constructor');
    this.randomNumber = Math.random() * 100_000_000_000;
  }
}
