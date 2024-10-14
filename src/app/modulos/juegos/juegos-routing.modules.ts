import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AhorcadoComponent } from "./componentes/ahorcado/ahorcado.component";
import { MayorOMenorComponent } from "./componentes/mayor-o-menor/mayor-o-menor.component";
import { PreguntadosComponent } from "./componentes/preguntados/preguntados.component";
import { CuatroFotosUnaPalabraComponent } from "./componentes/cuatro-fotos-una-palabra/cuatro-fotos-una-palabra.component";

const routes: Routes = [
    { path: 'ahorcado', component: AhorcadoComponent },
    { path: 'mayorOMenor', component: MayorOMenorComponent },
    { path: 'preguntados', component: PreguntadosComponent},
    { path: '4-fotos-1-palabra', component: CuatroFotosUnaPalabraComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JuegosRoutingModule { }