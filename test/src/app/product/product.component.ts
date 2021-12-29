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
  constructor(
    private appSv: AppService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.appSv.loading$.next(false);
    this.check = this.route.snapshot.data.check;
  }

}
