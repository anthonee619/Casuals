import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ventures',
  templateUrl: './ventures.component.html',
  styleUrls: ['./ventures.component.css']
})
export class VenturesComponent implements OnInit {
  id:string;

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id == 'c') {
      console.log("hello");
    }
  }

}
