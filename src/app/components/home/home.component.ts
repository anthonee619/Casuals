import { Component, OnInit,Input } from '@angular/core';
import { FoodService, Farmer, FoodCompany, Professional, Producer, Sports, Branding, Fame,
Franchise } from '../../../classes/classV.ts';
import { Portfolio } from '../../../classes/portfolio.ts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Input() availableVentures: Industry[];
  // @Input() portfolio: Portfolio;

  constructor() {}

  ngOnInit() {

  }

}
