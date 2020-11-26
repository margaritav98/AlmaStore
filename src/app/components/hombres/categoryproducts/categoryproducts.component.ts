import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-categoryproducts",
  templateUrl: "./categoryproducts.component.html",
  styleUrls: ["./categoryproducts.component.css"],
})
export class CategoryproductsComponent implements OnInit {
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
    console.log(category);
  }

  obtenerProductos(categoria) {
    let categoryQuery = categoria.toUpperCase();
    const query = {
      filters: {
        limit: 21,
        page: 0,
        categoria: categoryQuery,
        genero: "HOMBRES",
      },
    };
    this.ProductService.obtenerProductos(query).subscribe((res) => {
      this.productosRes = res;
      this.productos = this.productosRes.data;
      console.log(this.productos);
    });
  }
}
