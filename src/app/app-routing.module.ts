import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path:'home',
  loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)
},
{
  path:'areas',
  loadChildren: () => import ('./areas/areas.module').then(m => m.AreasModule)
},
{
  path:'categorias',
  loadChildren: () => import ('./categorias/categorias.module').then(m => m.CategoriasModule)
},
{
  path:'pratos',
  loadChildren: () => import ('./pratos/pratos.module').then(m => m.PratosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
