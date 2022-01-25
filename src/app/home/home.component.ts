import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public passCode: string = "";
  public wrongCode: boolean = false;
  public langOptions = ["de", "en"];
  public lang: string = "de"

  constructor(
    private _router: Router,
    private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.redirectIfNecessary();

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
          code: this.passCode,
          lang: this.lang,
        }
      }
    )}
    else {
      this.wrongCode = true;
      this.passCode = ""
    }
  }

  // This method is necessary when using i18n since this generates sub-directories with separate apps
  async redirectIfNecessary(){

    let spaRedirect = sessionStorage.getItem('path');
    if (spaRedirect) {

        let queryParams = {};
        
        // Extract query params
        if(spaRedirect.indexOf("?") != -1){
          const paramsStr = spaRedirect.split("?")[1];
          const p: any = new URLSearchParams(paramsStr);
          queryParams = this.fromEntries(p);
          spaRedirect = spaRedirect.split("?")[0];
        }

        const path = spaRedirect.split('/').filter(x => x.length > 0).slice(1).join('/'); // slice(1) to remove language segment
        console.log(path)
        await this._router.navigate(['/' + decodeURI(path)], { queryParams });
        sessionStorage.removeItem('path');
    }
    
  }

  fromEntries<T>(entries: [keyof T, T[keyof T]][]): T {
    return entries.reduce(
      (acc, [key, value]) => ({ ...acc, [key]: value }),
      <T>{}
    );
  }

}
