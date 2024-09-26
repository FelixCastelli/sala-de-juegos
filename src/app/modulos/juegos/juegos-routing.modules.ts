import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AhorcadoComponent } from "./componentes/ahorcado/ahorcado.component";
import { MayorOMenorComponent } from "./componentes/mayor-o-menor/mayor-o-menor.component";

const routes: Routes = [
    { path: 'ahorcado', component: AhorcadoComponent },
    { path: 'mayorOMenor', component: MayorOMenorComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JuegosRoutingModule { }