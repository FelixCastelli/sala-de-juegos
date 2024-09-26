import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.modules';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';



@NgModule({
  declarations: [AhorcadoComponent],
  imports: [CommonModule, JuegosRoutingModule]
})
export class JuegosModule { }
