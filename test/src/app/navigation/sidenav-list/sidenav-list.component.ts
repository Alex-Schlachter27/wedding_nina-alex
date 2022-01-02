import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})

export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  
  public passCode?: string;
  public links: any = {
    schedule: "/paragraph#schedule",
    invitation: "/paragraph#invitation",
    rsvp: "/paragraph#rsvp",
    location: "/paragraph#location",
  }
  constructor(
    private router: Router,
    private _route: ActivatedRoute
  ) { }
  ngOnInit(): void {
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
  public onSidenavClose(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name,
      queryParams: {
        code: this.passCode
      } });
    this.sidenavClose.emit();
  }
}