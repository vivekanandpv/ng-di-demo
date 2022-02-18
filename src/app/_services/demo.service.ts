import {Injectable} from '@angular/core';

@Injectable()
export class DemoService {
  randomNumber = 0;

  constructor() {
    console.log('DemoService constructor');
  }
}
