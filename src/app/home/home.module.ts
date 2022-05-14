import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/shared/cards/cards.module';
import { MaterialModule } from 'src/shared/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHttpService } from './services/home-http.service';



@NgModule({
    imports: [CommonModule, HomeRoutingModule, HttpClientModule, FlexLayoutModule, MaterialModule, CardModule],
    exports: [HomeComponent],
    declarations: [HomeComponent],
    providers: [HomeHttpService],
})
export class HomeModule { }
