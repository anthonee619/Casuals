import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
    this.id$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.id = params.get('id'))
    );
    console.log(this.id);
  }

}
