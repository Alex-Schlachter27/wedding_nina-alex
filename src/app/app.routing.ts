import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Router, Scroll } from '@angular/router';
// import { ViewportScroller } from '@angular/common';
// import { filter } from 'rxjs/operators';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'paragraph',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    /* instead of use extraOptions for Router */
    // scrollPositionRestoration: 'enabled',
    // anchorScrolling: 'enabled',
    // scrollOffset: [0, 50],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

