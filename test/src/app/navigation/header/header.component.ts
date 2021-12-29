import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  loading?: boolean;
  
  constructor(
    private router: Router,
    private appSv: AppService
  ) { }

  ngOnInit(): void {
    // this.appSv.loading$.subscribe(status => {
    //   this.loading = status;
    // })
  }
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name });
  }
}