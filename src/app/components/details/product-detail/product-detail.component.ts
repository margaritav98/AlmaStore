import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MainService } from "src/app/services/main.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private ProductService: MainService
  ) {}

  productoRes: any = [];
  producto: any = [];
  url = "http://localhost/EP2/backend_almastore/";

  ngOnInit() {
    let producto = this._route.snapshot.paramMap.get("id");
    this.obtenerDetalle(producto);
  }

  obtenerDetalle(id_producto) {
    const query = {
      filters: {
        id_producto: id_producto,
      },
    };
    this.ProductService.obtenerDetalleProducto(query).subscribe((res) => {
      this.productoRes = res;
      this.producto = this.productoRes.data;
      console.log(this.producto);
    });
  }
}
