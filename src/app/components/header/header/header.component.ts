import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  noticias = false;
  mostrar = false;
  herramientas = false;
  ngOnInit() {}

  mostrarMenu(num) {
    if (num == 1) {
      this.noticias = true;
      this.mostrar = true;
    } else {
      this.herramientas = true;
      this.mostrar = true;
    }
  }

  ocultar() {
    this.noticias = false;
    this.herramientas = false;
  }
}
