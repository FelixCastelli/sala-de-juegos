import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AhorcadoComponent } from "./componentes/ahorcado/ahorcado.component";

const routes: Routes = [
    { path: 'ahorcado', component: AhorcadoComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JuegosRoutingModule { }