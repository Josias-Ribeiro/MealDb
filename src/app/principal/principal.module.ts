import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/header/header.module';
import { PrincipalRoutesModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    
    PrincipalRoutesModule
  ]
})
export class PrincipalModule { }
