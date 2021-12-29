import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})

export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  constructor(
    private router: Router,
  ) { }
  ngOnInit() {
  }
  public onSidenavClose(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name });
    this.sidenavClose.emit();
  }
}