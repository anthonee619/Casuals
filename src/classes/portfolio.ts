import { FoodService, Farmer, FoodCompany, Professional, Producer, Sports, Branding, Fame,
Franchise } from '../classes/classV.ts'

export class Portfolio {
  ventures: Industry[] = [];
  funds: number = 20;

  constructor() {
    // for later
  }

  function isEmpty: Boolean() {
    if (this.ventures.length == 0) {
      console.log("nothing here")
    }
  }
}
