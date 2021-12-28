import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AppService {
  loading$ = new BehaviorSubject<any>(null);
}
