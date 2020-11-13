import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreHeaderComponent } from "./components/header/pre-header/pre-header.component";
import { HeaderComponent } from "./components/header/header/header.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ProductListComponent } from "./components/mujeres/product-list/product-list.component";
import { ProductComponent } from './components/product/product.component';
import { ProductsCategoryComponent } from './components/mujeres/details/products-category/products-category.component';
import { ProductDetailComponent } from './components/mujeres/details/product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    CarouselComponent,
    ProductListComponent,
    ProductComponent,
    ProductsCategoryComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
