import { AfterViewInit, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FirebaseService } from '../../servicios/firebase.service';
import { Router } from '@angular/router';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements AfterViewInit {
  email: string = '';
  contrasenia: string = '';
  error:string = '';
  exito = true;

  constructor(private router: Router, private firestore : Firestore, private firebaseService: FirebaseService ) {}

  ngAfterViewInit(): void {}

  async logIn() {
    try {
        await this.firebaseService.logIn(this.email, this.contrasenia).then(() => {
        let col = collection(this.firestore, 'logins');
        let obj = {fecha : new Date(), 'user': this.email}
        addDoc(col, obj);
        this.router.navigate(['/home']);
        
      });
    } catch(e:any) {
      this.exito = false;
      this.error = "Correo electrónico o contraseña inválidos";

      }
    }
    
    autoCompletar() {
      this.email = 'admin@admin.com';
      this.contrasenia = '123456';

    }

    irARegistro() {
      this.router.navigate(['/registro']);

    }

    irAHome() {
      this.router.navigate(['/home']);
    }
}
