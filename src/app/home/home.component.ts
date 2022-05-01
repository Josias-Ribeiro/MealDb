import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from './services/home-http.service';
import { CategoriaModel } from '../categorias/model/categoria.model';

@Component({
  templateUrl: './view/home.component.html',
  styleUrls: ['./view/home.component.scss']
})
export class HomeComponent implements OnInit {
    arrayCategorias: CategoriaModel[] = [];
    primeiraImagem: string;

  constructor(private _httpService: HomeHttpService) {}

  ngOnInit() {
    this.consultarCategoriaApi()  
  }  

  consultarCategoriaApi(){
    this._httpService.consultarCategorias().subscribe((res) => {
        this.arrayCategorias = res.categories;
        this.primeiraImagem = res.categories[0].strCategoryThumb
      });
  }
}
