import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PreHeaderComponent } from "./components/header/pre-header/pre-header.component";
import { HeaderComponent } from "./components/header/header/header.component";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { ProductListComponent } from './components/mujeres/product-list/product-list.component';
import { BlusasListComponent } from './components/mujeres/details/blusas-list/blusas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PreHeaderComponent,
    HeaderComponent,
    CarouselComponent,
    ProductListComponent,
    BlusasListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
