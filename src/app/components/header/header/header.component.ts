import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/main.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor(private GeneroService: MainService) {}

  listaGeneros: any = [];
  mujeres: any = [];
  hombres: any = [];
  ninos: any = [];

  ngOnInit() {
    this.obtenerGeneros();
  }

  obtenerGeneros() {
    this.GeneroService.obtenerGeneros().subscribe((res) => {
      this.listaGeneros = res;
      this.mujeres = this.listaGeneros.data[1];
      this.hombres = this.listaGeneros.data[2];
      this.ninos = this.listaGeneros.data[0];
    });
  }
}
