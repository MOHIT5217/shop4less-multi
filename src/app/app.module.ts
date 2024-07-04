import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import{ OrdersModule } from './orders/orders.module';
import { HeaderComponent } from './site-fram/header/header.component';
import { FooterComponent } from './site-fram/footer/footer.component';
import { SidebarComponent } from './site-fram/sidebar/sidebar.component';
import { MainComponent } from './site-fram/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './site-fram/page-not-found/page-not-found.component';
import { TodoComponent } from './todo-list/todo/todo.component';
import{ReactiveFormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    PageNotFoundComponent,
    TodoComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
