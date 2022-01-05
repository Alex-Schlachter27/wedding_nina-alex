import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from '@angular/common/http';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('autosize') autosize?: CdkTextareaAutosize;
  
  public check: any;
  public passCode?: string;
  public inputData: {[x: string]: any} = {
    email: "",
    name: "",
    amount: "",
    code: "",
    comment: "",
    songs: "",
  }

  public location = {
    lat: 47.82546157828619,
    lng: 9.638711915674572,
  }

  public links: any = {
    schedule: "/paragraph#schedule",
    invitation: "/paragraph#invitation",
    rsvp: "/paragraph#rsvp",
    location: "/paragraph#location",
  }

  constructor(
    private router: Router,
    private appSv: AppService,
    private _route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.appSv.loading$.next(false);
    this.check = this._route.snapshot.data.check;

    // set code from params as this.passCode
    this._route.queryParams.subscribe(params => {
      console.log(params)
      if(params["code"] && params["code"] != undefined) {
        this.passCode = params["code"];
        this.inputData.code = this.passCode;
      }
    });

    Object.keys(this.links).map(key => {
      this.links[key] = this.links[key] + this.passCode;
    })
    console.log(this.links)
  }

  forceNavigate(name: string) {
    this.router.navigate(['/paragraph'], { fragment: name,
      queryParams: {
        code: this.passCode
      }
    });
  }

  submitRSVP() {
    console.log(this.inputData)
    const params = this.inputData //= {email: 'alex270494@web.de', name: 'alex', amount: 1, code: '220527'}
    try {
      if(!this.inputData.name || this.inputData.name == "") throw "Bitte gebe deinen Namen an!";
      if(!this.inputData.email || this.inputData.email == "") throw "Bitte gebe deine Email-Adresse an!";
      if(!this.inputData.email.includes("@")) throw "Bitte gebe eine richtige Email-Adresse an!";
      if(!this.inputData.amount || this.inputData.amount == "") throw "Bitte gebe die Anzahl der Personen an, die mit deinem Namen angemeldet werden sollen!";
      if(this.inputData.amount > 5) throw "Max. Anzahl pro Anmeldung 5 Personen!";

      this.http.post<any>(
        'https://script.google.com/macros/s/AKfycbyxy9DengWweSyvJVC195Dxtu6_7AWqon6QUlMecU4HlzNfgyBdVa1tNDmk2QkKPQcYdQ/exec', 
        undefined, 
        { headers: {
          "Content-Type": "text/plain"
          },
          params: {
            email: params.email,
            name: params.name,
            phone: params.phone,
            amount: params.amount,
            songs: params.songs,         
            comment: params.comment,
            code: params.code            
          }
        }).subscribe(data => {
            console.log(data);
            if(data.result == "success") {
              alert("Du hast dich erfolgreich angemeldet! Wir freuen uns schon auf dich 😊")
            }
        })


    } catch (e:any) {
      console.log(e)
      this._snackBar.open(e, "ok", {
        duration: 5000,
      });
    }
  }

}
