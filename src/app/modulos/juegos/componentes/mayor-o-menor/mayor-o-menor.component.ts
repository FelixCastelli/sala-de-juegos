import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mayor-o-menor',
  standalone: false,
  templateUrl: './mayor-o-menor.component.html',
  styleUrl: './mayor-o-menor.component.scss'
})
export class MayorOMenorComponent {
  cartaEscondida = 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/carta_escondida.png?alt=media&token=8d5b3ed8-d9fe-4bb1-b9c8-93608db56529';
  cartas = [
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20basto.png?alt=media&token=5236afbd-59ff-4c6d-8776-77ffedd3a0a0', value: 1 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20basto.png?alt=media&token=1a450d1d-e0e1-4a6d-9202-4c3e3ee3a757', value: 2 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20basto.png?alt=media&token=bd656e08-4a05-44a1-a32a-380a9fa0cb77', value: 3 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20basto.png?alt=media&token=abcf432c-77fd-4f4e-ba3c-fed7eaeb3da1', value: 4 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20basto.png?alt=media&token=6f3fb4df-2fcb-4227-b5c0-fd613baab9e2', value: 5 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20basto.png?alt=media&token=afcad679-d6c8-488e-b462-ef42712017c6', value: 6 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20basto.png?alt=media&token=3517301f-609d-4a37-a771-1140c43d62f7', value: 7 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20basto.png?alt=media&token=a6cb235f-402c-4741-a3eb-b7b98061215a', value: 8 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20basto.png?alt=media&token=06e3bdfe-7d2e-492d-90be-b6a3aa25c200', value: 9 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20basto.png?alt=media&token=5a970177-011f-4181-9252-d9090a554696', value: 10 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20basto.png?alt=media&token=88de7904-94c7-4080-9ca1-61240e24af9a', value: 11 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20basto.png?alt=media&token=4f48aa5b-04df-4af1-9074-d8cb9642634f', value: 12 }
  ]
  cartaActual: { src: string, value: number; } | null = null;
  proximaCarta: { src: string, value: number; } | null = null;
  puntos: number = 0;
  juegoPerdido: boolean = false;
  mostrarSiguienteCarta: boolean = false;
  juegoIniciado: boolean = false;

  constructor(private router: Router) { }

  iniciarJuego() {
    this.puntos = 0;
    this.juegoPerdido = false;
    this.mostrarSiguienteCarta = false;
    this.sacarCarta();
    this.juegoIniciado = true;

  }

  sacarCarta() {
    const indiceRandom = Math.floor(Math.random() * this.cartas.length);
    this.cartaActual = this.cartas[indiceRandom];
    this.proximaCarta = this.obtenerProximaCarta();
    this.mostrarSiguienteCarta = false;

  }

  obtenerProximaCarta(): { src: string; value: number } {
    let nuevaCarta;
    do {
      const indiceRandom = Math.floor(Math.random() * this.cartas.length);
      nuevaCarta = this.cartas[indiceRandom];
    } while (nuevaCarta === this.cartaActual);
    return nuevaCarta;

  }

  adivinaMayor() {
    this.mostrarSiguienteCarta = true;
    if (this.proximaCarta && this.cartaActual) {
      if (this.proximaCarta.value > this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.proximaCarta = this.obtenerProximaCarta();

      } else {
        this.juegoPerdido = true;
      }
    }
  }

  adivinaMenor() {
    this.mostrarSiguienteCarta = true;
    if (this.proximaCarta && this.cartaActual) {
      if (this.proximaCarta.value < this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.proximaCarta = this.obtenerProximaCarta();

      } else {
        this.juegoPerdido = true;
      } 
    }

  }

  volverAlHome() {
    this.router.navigate(['/home']);

  }

  listoParaJugar() {
    this.iniciarJuego();

  }

}
