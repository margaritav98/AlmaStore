import { ProductsCategoryComponent } from "./components/mujeres/details/products-category/products-category.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { ProductListComponent } from "./components/mujeres/product-list/product-list.component";

const routes: Routes = [
  { path: "mujeres", component: ProductListComponent },
  { path: "products/:category", component: ProductsCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
