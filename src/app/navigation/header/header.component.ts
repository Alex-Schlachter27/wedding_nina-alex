import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  loading?: boolean;
  public passCode?: string;
  public links: any = {
    schedule: "/paragraph#schedule",
    invitation: "/paragraph#invitation",
    rsvp: "/paragraph#rsvp",
    location: "/paragraph#location",
  }
  
  constructor(
    private router: Router,
    private appSv: AppService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.appSv.loading$.subscribe(status => {
    //   this.loading = status;
    // })
    this._route.queryParams.subscribe(params => {
      console.log(params)
      if(params["code"] && params["code"] != undefined) {
        this.passCode = params["code"]
      }
    });

    Object.keys(this.links).map(key => {
      this.links[key] = this.links[key] + this.passCode;
    })
    console.log(this.links)
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name,
      queryParams: {
        code: this.passCode
      }
    });
  }

  goHome() {
    // if(this.passCode && this.passCode != undefined)
    this.router.navigate(['/home'], { 
      queryParams: {
        code: this.passCode
      }
    });
  }
}