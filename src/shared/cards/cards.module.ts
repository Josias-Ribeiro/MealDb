import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { CardComponent } from './card.component';



@NgModule({
    imports: [CommonModule, FlexLayoutModule, MaterialModule],
    exports: [CardComponent],
    declarations: [CardComponent],
    providers: [],
})
export class CardModule { }
 