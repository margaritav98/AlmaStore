import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-products-category",
  templateUrl: "./products-category.component.html",
  styleUrls: ["./products-category.component.css"],
})
export class ProductsCategoryComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private ProductService: MainService
  ) {}
  productosRes: any = [];
  productos: any = [];
  url = "http://localhost/EP2/backend_almastore/";
  ngOnInit() {
    let category = this._route.snapshot.paramMap.get("category");
    this.obtenerProductos(category);
  }

  obtenerProductos(categoria) {
    let categoryQuery = categoria.toUpperCase();
    const query = {
      filters: {
        limit: 21,
        page: 0,
        categoria: categoryQuery,
        genero: "MUJERES",
      },
    };
    this.ProductService.obtenerProductos(query).subscribe((res) => {
      this.productosRes = res;
      this.productos = this.productosRes.data;
    });
  }
}
