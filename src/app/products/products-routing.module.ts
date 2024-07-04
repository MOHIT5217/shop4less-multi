import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllBycategoryProductComponent } from './view-all-bycategory-product/view-all-bycategory-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  { path: 'create', component: CreateProductComponent },
  { path: 'update/:id', component: UpdateProductComponent },
  { path: 'view/:id', component: ViewProductComponent },
  { path: 'delete/:id', component: DeleteProductComponent },
  { path: 'viewall-bycat/:id', component: ViewAllBycategoryProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
