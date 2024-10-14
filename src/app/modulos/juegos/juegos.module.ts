import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.modules';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './componentes/mayor-o-menor/mayor-o-menor.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { CuatroFotosUnaPalabraComponent } from './componentes/cuatro-fotos-una-palabra/cuatro-fotos-una-palabra.component';

@NgModule({
  declarations: [AhorcadoComponent, MayorOMenorComponent, PreguntadosComponent, CuatroFotosUnaPalabraComponent],
  imports: [CommonModule, JuegosRoutingModule]
})
export class JuegosModule { }
