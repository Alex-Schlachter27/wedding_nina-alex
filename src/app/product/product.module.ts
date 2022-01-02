import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ProductRoutingModule } from './product.routing';
import { ProductComponent } from './product.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  declarations: [ProductComponent],
  imports: [ProductRoutingModule,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSnackBarModule,
    HttpClientModule,
    GoogleMapsModule
  ]
})
export class ProductModule {}
