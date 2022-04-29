import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasComponent } from './abas/areas/areas.component';
import { CategoriasComponent } from './abas/categorias/categorias.component';
import { HomeComponent } from './abas/home/home.component';
import { PratosComponent } from './abas/pratos/pratos.component';
import { PrincipalComponent } from './principal.component';

export const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      { path: 'categorias', component: CategoriasComponent },
      { path: 'areas', component: AreasComponent },
      { path: 'pratos', component: PratosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalRoutesModule {}
