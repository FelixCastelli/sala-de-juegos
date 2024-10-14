import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntadosService } from '../../../../servicios/preguntados.service';

@Component({
  selector: 'app-preguntados',
  standalone: false,
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.scss'
})
export class PreguntadosComponent {

  constructor(private router: Router, private preguntadosService: PreguntadosService) {}

}
