import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const products = [
      {
        id: 1,
        name: 'iPhone',
        price: 650
      },
      {
        id: 2,
        name: 'MacBook Pro',
        price: 2500
      },
      {
        id: 3,
        name: 'iPad',
        price: 200
      }
    ];

    return { products };
  }

  constructor() { }

}
