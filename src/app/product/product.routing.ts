import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      check: ProductResolver
    },
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class ProductRoutingModule { }
