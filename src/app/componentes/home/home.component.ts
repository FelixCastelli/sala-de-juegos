import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { CommonModule } from '@angular/common';
import { collection, addDoc, Firestore, query, orderBy, Timestamp } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  usuario!: any;
  mensajes: { emisor: string; idEmisor: string; texto: string; hora: string; timestamp: Date }[] = [];
  mensajeNuevo: string = '';
  chatAbierto = false;
  subscripcion!: Subscription;
  mostrarMensaje = false;
  
  constructor(private router: Router, private firebaseService: FirebaseService, private firestore: Firestore) {}

  ngOnInit() {
    this.usuario = this.firebaseService.getCurrentUser();
    this.cargarMensajes();
  }

  irAQuienSoy() {
    this.router.navigate(['/quien-soy']);
  }

  irALogIn() {
    this.router.navigate(['/login']);
  }

  irAAhorcado() {
    if (!this.usuario) {
      this.mostrarMensaje = true;
      return;
    }
    this.mostrarMensaje = false;
    this.router.navigate(['/juegos/ahorcado']);
  }

  irAMayorOMenor() {
    if (!this.usuario) {
      this.mostrarMensaje = true;
      return;
    }
    this.mostrarMensaje = false;
    this.router.navigate(['/juegos/mayorOMenor']);
  }

  irAPreguntados() {
    if (!this.usuario) {
      this.mostrarMensaje = true;
      return;
    }
    this.mostrarMensaje = false;
    this.router.navigate(['/juegos/preguntados']);
  }

  irACuatroFotosUnaPalabra() {
    if (!this.usuario) {
      this.mostrarMensaje = true;
      return;
    }
    this.mostrarMensaje = false;
    this.router.navigate(['/juegos/4-fotos-1-palabra']);
  }

  async logOut() {
    await this.firebaseService.logOut();
    this.usuario = this.firebaseService.getCurrentUser();
    this.router.navigate(['/home']);
  }

  abrirChat() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox) {
      chatBox.classList.toggle('hidden');
    }
  }

  async enviarMensaje() {
    if (this.mensajeNuevo.trim()) {
      const fecha = new Date();
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const dia = String(fecha.getDate()).padStart(2, '0');
      const mes = String(fecha.getMonth() + 1).padStart(2, '0');
      const anio = fecha.getFullYear();
      const fechaFormateada = `${dia}/${mes}/${anio}`;
      const tiempo = `${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;

      const col = collection(this.firestore, 'mensajes');
      const objMensaje = {
        id: this.usuario?.uid,
        usuario: this.usuario?.email,
        hora: `${fechaFormateada} ${tiempo}`,
        mensaje: this.mensajeNuevo,
        timestamp: Timestamp.now()
      };

      await addDoc(col, objMensaje);

      this.mensajeNuevo = '';
      this.scrollearAlFondo();
    }
  }

  cargarMensajes() {
    const col = collection(this.firestore, 'mensajes');
    const mensajesQuery = query(col, orderBy('timestamp', 'asc'));

    this.subscripcion = collectionData(mensajesQuery).subscribe((respuesta: any) => {
      this.mensajes = respuesta.map((item: { usuario: string; id: string; mensaje: string; hora: string; timestamp: Timestamp }) => ({
        emisor: item.usuario,
        idEmisor: item.id,
        texto: item.mensaje,
        hora: item.hora,
        timestamp: item.timestamp.toDate()
      }));
      this.scrollearAlFondo();
    });
  }

  toggleChat() {
    this.chatAbierto = !this.chatAbierto;
  }

  ngOnDestroy(): void {
    if (this.subscripcion) {
      this.subscripcion.unsubscribe();
    }
  }

  scrollearAlFondo() {
    const chatBox = document.getElementById('chatBox');
    if (chatBox) {
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight;
      }, 100);
    }
  }
}
