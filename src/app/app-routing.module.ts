import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// components
import { ProductListComponent } from "./components/mujeres/product-list/product-list.component";
import { BlusasListComponent } from "./components/mujeres/details/blusas-list/blusas-list.component";

const routes: Routes = [
  { path: "mujeres", component: ProductListComponent },
  { path: "mujeres/blusas", component: BlusasListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
