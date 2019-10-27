import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, ROUTES, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: 'product/:id',
    component: ProductPageComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
