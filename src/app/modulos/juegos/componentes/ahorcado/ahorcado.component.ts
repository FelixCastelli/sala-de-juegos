import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorcado',
  standalone: false,
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss'
})
export class AhorcadoComponent {
  palabras: string[] = ['algoritmo', 'funcion', 'array', 'variable', 'compilado', 'booleano'];
  palabraSeleccionada: string = '';
  letrasAdivinadas: string[] = [];
  intentos: number = 6;
  intentosUsados: number = 0;
  letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letrasIncorrectas: string[] = [];
  imagenesAhorcado: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%200.jpg?alt=media&token=43fe291b-a94e-4693-82b0-df91a565c09a',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%201.jpg?alt=media&token=b84e84b7-274c-495b-a2f8-9a40f677000c',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%202.jpg?alt=media&token=316b83cd-ceb4-4fbc-8849-4ac9255c8615',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%203.jpg?alt=media&token=4416450a-971e-4be3-a367-95eb5814c2be',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%204.jpg?alt=media&token=dce17937-21dc-42e0-b730-d78a216536db',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%205.jpg?alt=media&token=57580add-85e3-4e42-8fb5-1f1d4dd96ddd',
    'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/ahorcado%206.jpg?alt=media&token=d93a0548-56e2-4ae2-8523-c77f669e8baf'
  ]
  juegoIniciado: boolean = false;
  juegoGanado: boolean = false;
  juegoPerdido: boolean = false;

  constructor(private router: Router) { }

  iniciarJuego() {
    this.palabraSeleccionada = this.palabraRandom();
    this.letrasAdivinadas = Array(this.palabraSeleccionada.length).fill('_');
    this.letrasIncorrectas = [];
    this.intentosUsados = 0;
    this.juegoIniciado = true;
    this.juegoGanado = false;
    this.juegoPerdido = false;
    
  }

  palabraRandom(): string {
    return this.palabras[Math.floor(Math.random() * this.palabras.length)];

  }

  adivinarLetra(letra: string) {
    if (this.letrasAdivinadas.includes(letra) || this.letrasIncorrectas.includes(letra)) {
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
      this.juegoGanado = true;
    }

    if (this.intentosUsados >= this.intentos) {
      this.juegoPerdido = true;
    }

  }

  obtenerImagenAhorcado(): string {
    return this.imagenesAhorcado[this.intentosUsados];

  }

  volverAlHome() {
    this.router.navigate(['/home']);

  }

  listoParaJugar() {
    this.iniciarJuego();

  }

}
