import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  check: any;
  passCode?: string;

  constructor(
    private appSv: AppService,
    private _route: ActivatedRoute) {}

  ngOnInit() {
    this.appSv.loading$.next(false);
    this.check = this._route.snapshot.data.check;

    // set code from params as this.passCode
    this._route.queryParams.subscribe(params => {
      console.log(params)
      if(params["code"] && params["code"] != undefined) {
        this.passCode = params["code"]
      }
    });
  }

}
