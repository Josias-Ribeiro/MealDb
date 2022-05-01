import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PratosComponent } from "./pratos.component";

const routes : Routes = [
    {
        path: '',
        component: PratosComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PratosRoutingModule{}