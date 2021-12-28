import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  loading: boolean;

  constructor(
    private router: Router,
    private appSv: AppService) {}
  
  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name });
  }

  ngOnInit() {
    this.appSv.loading$.subscribe(status => {
      this.loading = status;
    })
  }
}
