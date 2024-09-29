import { Component } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { Router } from '@angular/router';
import {addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  email: string = '';
  contrasenia: string = '';
  error:string = '';
  exito = true;

  constructor(private firebaseService: FirebaseService, private firestore : Firestore, private router : Router) {}

  async registrarse() {
    
    try{
          await this.firebaseService.registro(this.email, this.contrasenia).then(() => {
          let col = collection(this.firestore, 'logins');
          let obj = {fecha : new Date(), 'user': this.email}
          addDoc(col, obj)
          this.router.navigate(['/home']);
      });
    }
    catch(e:any){
      this.exito = false;
      this.manejoErrores(e.code);
    }
  }


  private manejoErrores(codigo: string) {
    switch (codigo) {
      case 'auth/email-already-in-use':
        this.error = "La dirección de correo electrónico ya está en uso.";
        break;
      case 'auth/invalid-email':
        this.error = 'La dirección de correo electrónico no es válida.';
        break;
      case 'auth/weak-password':
        this.error = 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
        break;
      default:
        this.error = "Ocurrió un error. Por favor, intenta nuevamente.";
        break;
    }
  }

  volverALogIn() {
    this.router.navigate(['/login']);

  }
}
