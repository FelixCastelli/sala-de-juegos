import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../../servicios/firebase.service';

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
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20basto.png?alt=media&token=4f48aa5b-04df-4af1-9074-d8cb9642634f', value: 12 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20espada.png?alt=media&token=0d76b3c3-a263-47db-9d2d-3c608b7c34d1', value: 1 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20espada.png?alt=media&token=252a8704-099a-40f0-a28d-871b49cf899a', value: 2 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20espada.png?alt=media&token=c70e806f-18cd-4c0b-a157-cd762e38ca19', value: 3 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20espada.png?alt=media&token=d1c2f515-3e60-40b2-bbce-419d1334b018', value: 4 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20espada.png?alt=media&token=b42672ae-cb55-48ab-a2d2-88d25364135d', value: 5 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20espada.png?alt=media&token=3cd6307c-a145-4ef6-b55d-7339a6120a49', value: 6 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20espada.png?alt=media&token=d2cf519a-485c-4a21-add2-3861344513a6', value: 7 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20espada.png?alt=media&token=cb057073-fae9-40b0-8c04-cdb9abcce0c1', value: 8 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20espada.png?alt=media&token=51b11c1b-1d7e-4043-a597-bbcefde3d1a1', value: 9 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20espada.png?alt=media&token=6ddbcf5c-fa49-443d-a175-69f3d2c520fc', value: 10 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20espada.png?alt=media&token=c2c39d0b-cf09-4f77-9de9-dcd9be2f2877', value: 11 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20espada.png?alt=media&token=eb1ca33f-50c8-4f79-87f4-525ada198c95', value: 12 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20copa.png?alt=media&token=3e44119b-4d55-486b-8a4d-5c19c1dc5b6e', value: 1 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20copa.png?alt=media&token=68cb9779-933a-44e6-bfdd-4ba16734aea6', value: 2 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20copa.png?alt=media&token=1410f186-0ded-426a-9f2c-1cab26924e8c', value: 3 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20copa.png?alt=media&token=17fccbfb-7ece-463a-99e5-4ac9605e0968', value: 4 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20copa.png?alt=media&token=cb499eaf-f96f-4f66-952a-91e6d21516a4', value: 5 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20copa.png?alt=media&token=f31a2441-ee83-4f7a-b246-0899452a5cdc', value: 6 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20copa.png?alt=media&token=ce5d5cc8-a445-400c-8019-f0fbb3e33007', value: 7 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20copa.png?alt=media&token=13fe7e7c-e2a0-45c8-a6a1-2f2d66529433', value: 8 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20copa.png?alt=media&token=10ab1d7d-22a9-4fb3-b793-9fa2b8ab0c60', value: 9 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20copa.png?alt=media&token=f8aea20d-f5f2-47d7-a4d3-2aabc5a48303', value: 10 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20copa.png?alt=media&token=c55c4e37-e464-4ffb-8963-671f0ed6549b', value: 11 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20copa.png?alt=media&token=426348d4-4dd2-4d6e-96aa-c82ab08e57e0', value: 12 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20oro.png?alt=media&token=aa0bbb7b-5746-43e0-8a13-e6da722175ad', value: 1 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20oro.png?alt=media&token=3af9e532-d4aa-4033-aac8-8e44f0f91e3b', value: 2 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20oro.png?alt=media&token=d1cace8e-d580-42dc-9908-44f0ec321c89', value: 3 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20oro.png?alt=media&token=5526aa51-9c72-4110-8685-45bfe13d2e5e', value: 4 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20oro.png?alt=media&token=46f3daf7-bf65-46bd-8b4e-1f71d9a8c2bc', value: 5 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20oro.png?alt=media&token=0d683b5d-0e52-44bf-adf8-f58cd109fa37', value: 6 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20oro.png?alt=media&token=5199b29a-68f6-43da-b5a4-84a4eff2da5b', value: 7 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20oro.png?alt=media&token=befcd203-4e60-4275-9e2e-d1284eae0be5', value: 8 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20oro.png?alt=media&token=b02a1d18-fdd4-4abe-861e-7f3fcafce3d8', value: 9 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20oro.png?alt=media&token=89ee4e6f-496d-4909-b4fe-c8d82ea73fe8', value: 10 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20oro.png?alt=media&token=8234c8a1-1c1d-4bcd-99dc-d456d3d8c5d4', value: 11 },
    { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20oro.png?alt=media&token=d0b2e3e1-e45f-405f-bc0f-8b5264919d94', value: 12 }
  ]
  cartaActual: { src: string, value: number; } | null = null;
  proximaCarta: { src: string, value: number; } | null = null;
  cartasUsadas: { src: string, value: number; }[] = [];
  puntos: number = 0;
  partidaTerminada: boolean = false;
  mostrarSiguienteCarta: boolean = false;
  juegoIniciado: boolean = false;
  ranking: any[] = [];

  constructor(private router: Router, private firebaseService: FirebaseService) { }

  iniciarJuego() {
    this.puntos = 0;
    this.partidaTerminada = false;
    this.mostrarSiguienteCarta = false;
    this.sacarCarta();
    this.juegoIniciado = true;
    this.cartasUsadas = [];
    this.obtenerRanking();
  }

  sacarCarta() {
    const indiceRandom = Math.floor(Math.random() * this.cartas.length);
    this.cartaActual = this.cartas[indiceRandom];
    this.cartasUsadas.push(this.cartaActual);
    this.proximaCarta = this.obtenerProximaCarta();
    this.mostrarSiguienteCarta = false;
  }

  obtenerProximaCarta(): { src: string; value: number } | null {
    if (this.cartas.length === 0) {
      this.partidaTerminada = true;
      this.firebaseService.subirPuntosJuego("mayor-o-menor", this.puntos)
    }
    const indiceRandom = Math.floor(Math.random() * this.cartas.length);
    const nuevaCarta = this.cartas[indiceRandom];
  
    this.cartas.splice(indiceRandom, 1);
  
    return nuevaCarta;
  }

  adivinaMayor() {
    this.mostrarSiguienteCarta = true;
    if (this.proximaCarta && this.cartaActual) {
      if (this.proximaCarta.value > this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();
      } else if (this.proximaCarta.value === this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();
      } else {
        this.puntos-= 1;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();
      }
    }
  }

  adivinaMenor() {
    this.mostrarSiguienteCarta = true;
    if (this.proximaCarta && this.cartaActual) {
      if (this.proximaCarta.value < this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();

      } else if (this.proximaCarta.value === this.cartaActual.value) {
        this.puntos++;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();
      } else {
        this.puntos-= 1;
        this.cartaActual = this.proximaCarta;
        this.cartasUsadas.push(this.cartaActual);
        this.proximaCarta = this.obtenerProximaCarta();
      } 
    }
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }

  listoParaJugar() {
    this.iniciarJuego();
  }

  reiniciarJuego() {
    this.juegoIniciado = false;
    this.puntos = 0;
    this.partidaTerminada = false;
    this.mostrarSiguienteCarta = false;
    this.cartasUsadas = [];

    this.cartas = [
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
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20basto.png?alt=media&token=4f48aa5b-04df-4af1-9074-d8cb9642634f', value: 12 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20espada.png?alt=media&token=0d76b3c3-a263-47db-9d2d-3c608b7c34d1', value: 1 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20espada.png?alt=media&token=252a8704-099a-40f0-a28d-871b49cf899a', value: 2 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20espada.png?alt=media&token=c70e806f-18cd-4c0b-a157-cd762e38ca19', value: 3 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20espada.png?alt=media&token=d1c2f515-3e60-40b2-bbce-419d1334b018', value: 4 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20espada.png?alt=media&token=b42672ae-cb55-48ab-a2d2-88d25364135d', value: 5 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20espada.png?alt=media&token=3cd6307c-a145-4ef6-b55d-7339a6120a49', value: 6 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20espada.png?alt=media&token=d2cf519a-485c-4a21-add2-3861344513a6', value: 7 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20espada.png?alt=media&token=cb057073-fae9-40b0-8c04-cdb9abcce0c1', value: 8 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20espada.png?alt=media&token=51b11c1b-1d7e-4043-a597-bbcefde3d1a1', value: 9 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20espada.png?alt=media&token=6ddbcf5c-fa49-443d-a175-69f3d2c520fc', value: 10 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20espada.png?alt=media&token=c2c39d0b-cf09-4f77-9de9-dcd9be2f2877', value: 11 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20espada.png?alt=media&token=eb1ca33f-50c8-4f79-87f4-525ada198c95', value: 12 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20copa.png?alt=media&token=3e44119b-4d55-486b-8a4d-5c19c1dc5b6e', value: 1 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20copa.png?alt=media&token=68cb9779-933a-44e6-bfdd-4ba16734aea6', value: 2 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20copa.png?alt=media&token=1410f186-0ded-426a-9f2c-1cab26924e8c', value: 3 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20copa.png?alt=media&token=17fccbfb-7ece-463a-99e5-4ac9605e0968', value: 4 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20copa.png?alt=media&token=cb499eaf-f96f-4f66-952a-91e6d21516a4', value: 5 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20copa.png?alt=media&token=f31a2441-ee83-4f7a-b246-0899452a5cdc', value: 6 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20copa.png?alt=media&token=ce5d5cc8-a445-400c-8019-f0fbb3e33007', value: 7 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20copa.png?alt=media&token=13fe7e7c-e2a0-45c8-a6a1-2f2d66529433', value: 8 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20copa.png?alt=media&token=10ab1d7d-22a9-4fb3-b793-9fa2b8ab0c60', value: 9 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20copa.png?alt=media&token=f8aea20d-f5f2-47d7-a4d3-2aabc5a48303', value: 10 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20copa.png?alt=media&token=c55c4e37-e464-4ffb-8963-671f0ed6549b', value: 11 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20copa.png?alt=media&token=426348d4-4dd2-4d6e-96aa-c82ab08e57e0', value: 12 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/1%20oro.png?alt=media&token=aa0bbb7b-5746-43e0-8a13-e6da722175ad', value: 1 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/2%20oro.png?alt=media&token=3af9e532-d4aa-4033-aac8-8e44f0f91e3b', value: 2 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/3%20oro.png?alt=media&token=d1cace8e-d580-42dc-9908-44f0ec321c89', value: 3 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/4%20oro.png?alt=media&token=5526aa51-9c72-4110-8685-45bfe13d2e5e', value: 4 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/5%20oro.png?alt=media&token=46f3daf7-bf65-46bd-8b4e-1f71d9a8c2bc', value: 5 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/6%20oro.png?alt=media&token=0d683b5d-0e52-44bf-adf8-f58cd109fa37', value: 6 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/7%20oro.png?alt=media&token=5199b29a-68f6-43da-b5a4-84a4eff2da5b', value: 7 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/8%20oro.png?alt=media&token=befcd203-4e60-4275-9e2e-d1284eae0be5', value: 8 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/9%20oro.png?alt=media&token=b02a1d18-fdd4-4abe-861e-7f3fcafce3d8', value: 9 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/10%20oro.png?alt=media&token=89ee4e6f-496d-4909-b4fe-c8d82ea73fe8', value: 10 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/11%20oro.png?alt=media&token=8234c8a1-1c1d-4bcd-99dc-d456d3d8c5d4', value: 11 },
      { src: 'https://firebasestorage.googleapis.com/v0/b/sala-de-juegos-59d90.appspot.com/o/12%20oro.png?alt=media&token=d0b2e3e1-e45f-405f-bc0f-8b5264919d94', value: 12 }
    ]
  }

  convertirFecha(timestamp: any): string {
    const date = new Date(timestamp.seconds * 1000);
    const dia = date.getDate().toString().padStart(2, '0');
    const mes = (date.getMonth() + 1).toString().padStart(2, '0');
    const año = date.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

  obtenerRanking() {
    this.firebaseService.traerPuntosJuego("mayor-o-menor").subscribe(res => {
      const rankingMap: { [key: string]: any } = {};
  
      res.forEach((punto: any) => {
        const usuario = punto.usuario;
        if (!rankingMap[usuario] || punto.puntos > rankingMap[usuario].puntos) {
          rankingMap[usuario] = punto;
        }
      });
  
      const usuarioActual = this.firebaseService.getCurrentUser()?.email;
      const mejorPuntajeActual = usuarioActual ? rankingMap[usuarioActual] : null;
  
      this.ranking = Object.values(rankingMap);
      if (mejorPuntajeActual) {
        if (!this.ranking.find((p) => p.usuario === usuarioActual)) {
          this.ranking.push(mejorPuntajeActual);
        }
      }
      console.log(this.ranking);
    });
  }
}
