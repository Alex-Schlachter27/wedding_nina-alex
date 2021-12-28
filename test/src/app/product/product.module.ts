import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [ProductRoutingModule, CommonModule]
})
export class ProductModule {}
