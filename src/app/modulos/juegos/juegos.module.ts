import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.modules';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { MayorOMenorComponent } from './componentes/mayor-o-menor/mayor-o-menor.component';



@NgModule({
  declarations: [AhorcadoComponent, MayorOMenorComponent],
  imports: [CommonModule, JuegosRoutingModule]
})
export class JuegosModule { }
