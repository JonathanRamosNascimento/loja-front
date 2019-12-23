import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ListUserComponent,
    NewCategoryComponent,
    ListCategoryComponent,
    NewProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
