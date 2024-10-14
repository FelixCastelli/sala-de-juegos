import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuatro-fotos-una-palabra',
  standalone: false,
  templateUrl: './cuatro-fotos-una-palabra.component.html',
  styleUrl: './cuatro-fotos-una-palabra.component.scss'
})
export class CuatroFotosUnaPalabraComponent {
  imagenes = [
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-agua.jpg?alt=media&token=7eaf76dd-f80b-4903-a864-b46f74b9e763", palabra : 'agua'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-bici.png?alt=media&token=8a35aa81-ccb5-43ca-be5d-03f3f585f8ab", palabra : 'bici'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-bala.png?alt=media&token=6236448d-22d7-4e66-ae17-a727f72965d3", palabra : 'bala'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-atomo.png?alt=media&token=ed97e1f2-c886-4665-93ba-c359657e94e0", palabra : 'atomo'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-app.png?alt=media&token=69914322-65ab-45ab-aafb-be666bf3824e", palabra : 'app'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-alambre.png?alt=media&token=e8224f41-9055-4dfd-9038-46dc4337f21d", palabra : 'alambre'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-Fotos-1-palabra-actor.png?alt=media&token=5574bdaf-b9e0-40df-9a70-76e6bf285588", palabra : 'actor'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/Soluciones-4-fotos-1-palabra-acciones.jpg?alt=media&token=5e2abede-caff-4a2c-8234-2ceb08598d06", palabra : 'acciones'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4-Fotos-1-palabra-albino.png?alt=media&token=011b0302-e824-4580-9c2e-f7d170523e3b", palabra : 'albino'},
    { src: "https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4-Fotos-1-palabra-alarma.png?alt=media&token=bec74d05-ddfe-4dd9-ab06-1dac6b8ba75d", palabra : 'alarma'}
  ]

  palabraSeleccionada: string = '';
  imagenesActuales: string[] = [];
  letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letrasAdivinadas: string[] = [];
  letrasIncorrectas: string[] = [];
  intentoActual: string = '';
  intentosMaximos: number = 6;
  intentosUsados: number = 0;
  juegoIniciado: boolean = false;
  juegoGanado: boolean = false;
  juegoPerdido: boolean = false;
  puntos: number = 0;
  palabrasUsadas: string[] = [];
  rondasGanadas: number = 0;
  rondaGanada: boolean = false;

  constructor(private router: Router) {}

  iniciarJuego() {
    this.palabraSeleccionada = this.palabraRandom();
    this.letrasAdivinadas = Array(this.palabraSeleccionada.length).fill('_');
    this.letrasIncorrectas = [];
    this.intentosUsados = 0;
    this.juegoGanado = false;
    this.juegoPerdido = false;
    this.rondaGanada = false;
    this.juegoIniciado = true;

    this.imagenesActuales = this.imagenes
    .filter(img => img.palabra === this.palabraSeleccionada)
    .map(img => img.src);
  }

  palabraRandom(): string {
    const palabrasDisponibles = this.imagenes.filter(img => !this.palabrasUsadas.includes(img.palabra));

    if (palabrasDisponibles.length === 0) {
      this.juegoGanado = true;
      return '';
    }

    const index = Math.floor(Math.random() * palabrasDisponibles.length);
    this.palabrasUsadas.push(palabrasDisponibles[index].palabra);
    return palabrasDisponibles[index].palabra;
  }

  adivinarLetra(letra: string) {
    if (this.letrasAdivinadas.includes(letra) || this.letrasIncorrectas.includes(letra) || letra.length !== 1) {
      return;
    }

    if (this.palabraSeleccionada.includes(letra)) {
      for (let i = 0; i < this.palabraSeleccionada.length; i++) {
        if (this.palabraSeleccionada[i] === letra) {
          this.letrasAdivinadas[i] = letra;
        }
      }
    } else {
      this.intentosUsados++;
      this.letrasIncorrectas.push(letra);
    }

    this.verificarEstadoJuego();
  }

  verificarEstadoJuego() {
    if (this.letrasAdivinadas.join('') === this.palabraSeleccionada) {
      this.puntos += this.intentosMaximos - this.intentosUsados;
      this.palabrasUsadas.push(this.palabraSeleccionada);
      this.rondasGanadas++;
      this.rondaGanada = true;

      if (this.palabrasUsadas.length === this.imagenes.length) {
        this.juegoGanado = true;
      }
    } else if (this.intentosUsados >= this.intentosMaximos) {
      this.juegoPerdido = true;
    }
  }

  reiniciarJuego() {
    this.palabraSeleccionada = '';
    this.letrasAdivinadas = [];
    this.letrasIncorrectas = [];
    this.intentosUsados = 0;
    this.juegoGanado = false;
    this.juegoPerdido = false;
    this.juegoIniciado = false;
    this.puntos = 0;
    this.palabrasUsadas = [];
    this.rondasGanadas = 0;
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }
}
