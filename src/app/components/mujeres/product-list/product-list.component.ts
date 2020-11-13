import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/main.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor(private CategoriaService: MainService) {}
  listaCategorias: any = [];

  mujeres: any = [];

  ngOnInit() {}

  obtenerCategorias() {
    this.CategoriaService.obtenerCategorias().subscribe((res) => {
      this.listaCategorias = res;
      this.mujeres = this.listaCategorias.data.MUJERES;
    });
  }
}
