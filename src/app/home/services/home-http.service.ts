import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HomeHttpService{
    rota = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    constructor(private _http: HttpClient ){}

    consultarCategorias(): Observable<any>{
        return this._http.get(this.rota)
    }

}