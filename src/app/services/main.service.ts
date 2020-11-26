import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Categoria } from "../models/categoria";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MainService {
  seleccionCategorias: Categoria;
  categorias: Categoria[];

  readonly URL_API_GENEROS =
    "https://run.mocky.io/v3/7661951e-3e16-4584-8183-6373914cd480";

  readonly URL_API_CATEGORIAS =
    "https://run.mocky.io/v3/2f88b1ff-ed97-419b-ab8b-3334d7ae1265";

  readonly URL_API_PRODUCTOS =
    "http://localhost/EP2/backend_almastore/api.php/getProductos";

  readonly URL_API_DETALLE =
    "http://localhost/EP2/backend_almastore/api.php/getDetalleProducto";

  readonly URL_API_LOGIN =
    "http://localhost/EP2/backend_almastore/api.php/f_Login";

  constructor(private http: HttpClient) {
    this.seleccionCategorias = new Categoria();
  }

  obtenerGeneros() {
    return this.http.get(this.URL_API_GENEROS);
  }

  obtenerCategorias() {
    return this.http.get(this.URL_API_CATEGORIAS);
  }

  obtenerProductos(genero) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post(this.URL_API_PRODUCTOS, genero, httpOptions);
  }

  obtenerDetalleProducto(id_producto) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post(this.URL_API_DETALLE, id_producto, httpOptions);
  }

  login(usuario) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
    return this.http.post(this.URL_API_DETALLE, usuario, httpOptions);
  }
}
