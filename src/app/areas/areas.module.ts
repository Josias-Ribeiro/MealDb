import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AreasRoutingModule } from './areas-routing.module';
import { AreasComponent } from './areas.component';



@NgModule({
    imports: [CommonModule, AreasRoutingModule],
    exports: [],
    declarations: [AreasComponent],
    providers: [],
})
export class AreasModule { }
