import { KidsComponent } from "./components/niños/kids/kids.component";
import { CategoryproductsComponent } from "./components/hombres/categoryproducts/categoryproducts.component";
import { PLComponent } from "./components/hombres/product-list/product-list.component";
import { ProductsCategoryComponent } from "./components/mujeres/products-category/products-category.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { ProductListComponent } from "./components/mujeres/product-list/product-list.component";
import { ProductDetailComponent } from "./components/details/product-detail/product-detail.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "mujeres", component: ProductListComponent },
  { path: "products/:category", component: ProductsCategoryComponent },
  { path: "product/detail/:id", component: ProductDetailComponent },
  { path: "hombres", component: PLComponent },
  { path: "productos/:category", component: CategoryproductsComponent },
  { path: "kids", component: KidsComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
