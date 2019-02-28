import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  testData() {
    return [{
      'text': 'Buy paper towels',
      'done': false,
      'archived': false
    }, {
      'text': 'Call the print lab',
      'done': false,
      'archived': false
    }, {
      'text': 'Look out the window',
      'done': true,
      'archived': false
    }, {
      'text': 'Setup alarm for 7AM',
      'done': false,
      'archived': true
    }, {
      'text': 'New Year\'s resolution: subscribe to a GYM',
      'done': true,
      'archived': true
    }, {
      'text': 'Buy a coat, Winter is coming',
      'done': false,
      'archived': false
    }];
  }
}
