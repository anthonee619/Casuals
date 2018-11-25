import { Component } from '@angular/core';
import { FoodService, Farmer, FoodCompany, Professional, Producer, Sports, Branding, Fame,
Franchise } from '../classes/classV.ts';
import { Portfolio } from '../classes/portfolio.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Casuals';
  availableVentures = [new FoodService(),
new Farmer(), new FoodCompany(), new Professional(),
new Producer(), new Sports(), new Branding(),
new Fame(), new Franchise()];
  portfolio: Portfolio = new Portfolio();

  constructor() {}

  ngOnInit() {
    // console.log(this.availableVentures);
    // console.log(this.portfolio);

    // setInterval(update(this.total), 100)

  }

  function update(total : num) {
    total++;
    console.log(total);
  }

}
