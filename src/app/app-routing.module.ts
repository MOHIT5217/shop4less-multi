import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { RxjsSeriseModule } from './rxjs-serise/rxjs-serise.module';
import { PageNotFoundComponent } from './site-fram/page-not-found/page-not-found.component';
import { TodoListModule } from './todo-list/todo-list.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs-serise/rxjs-serise-routing.module').then(m => RxjsSeriseModule) },
  { path: 'todo', loadChildren: () => import('./todo-list/todo-list-routing.module').then(m => TodoListModule) },
  { path: 'login', loadChildren: () => import('./auth/auth-routing.module').then(m => AuthModule) },
  { path: 'child',  component: ChildComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
