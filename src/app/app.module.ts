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
import { ProductDetailComponent } from "./components/details/product-detail/product-detail.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PLComponent } from "./components/hombres/product-list/product-list.component";
import { ProductsCategoryComponent } from "./components/mujeres/products-category/products-category.component";
import { CategoryproductsComponent } from "./components/hombres/categoryproducts/categoryproducts.component";
import { KidsComponent } from "./components/niños/kids/kids.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    CarouselComponent,
    ProductListComponent,
    ProductsCategoryComponent,
    ProductDetailComponent,
    FooterComponent,
    PLComponent,
    CategoryproductsComponent,
    KidsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
