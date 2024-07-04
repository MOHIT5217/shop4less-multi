import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { ProductsRoutingModule } from './products-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { ProductsComponent } from './products.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllBycategoryProductComponent } from './view-all-bycategory-product/view-all-bycategory-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewProductComponent,
    CreateProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewAllBycategoryProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class ProductsModule { }
