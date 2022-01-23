import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { LOCALE_ID, Inject } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  loading?: boolean;
  title = 'test';
  localesList = [
    { code: 'en', label: 'English' },
    { code: 'de', label: 'Deutsch' }
  ]

  constructor(
    private router: Router,
    private appSv: AppService,
    @Inject(LOCALE_ID) public locale: string
    ) {}
  
  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name });
  }

  ngOnInit() {
    // Redirect to subpage if one is given in sessionStorage
    this.redirectIfNecessary();

    this.appSv.loading$.subscribe(status => {
      this.loading = status;
    })
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
          await this.router.navigate(['/' + decodeURI(path)], { queryParams });
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
