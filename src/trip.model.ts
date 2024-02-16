// trip.model.ts

export class Trip {
    id: number;
    from: string;
    to: string;
    price: number;
  
    constructor(id: number, from: string, to: string, price: number) {
      this.id = id;
      this.from = from;
      this.to = to;
      this.price = price;
    }
  }
  