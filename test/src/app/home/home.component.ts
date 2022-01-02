import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public passCode: string = "";
  public wrongCode: boolean = false;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute) {}

  ngOnInit(): void {
    // For now, let's fake the isAdmin-setting by query parameter
    console.log(this._route.routeConfig?.component?.name)
    
    // set code from params as this.passCode
    this._route.queryParams.subscribe(params => {
      console.log(params)
      if(params["code"] && params["code"] != undefined) {
        this.passCode = params["code"]
      }
    });
  }

  goToMain(){
    console.log(this.passCode);
    if(this.passCode == "220527") {
      this._router.navigate(['/paragraph'], { 
        queryParams: {
          code: this.passCode
        }
      }
    )}
    else {
      this.wrongCode = true;
      this.passCode = ""
    }
  }

}
