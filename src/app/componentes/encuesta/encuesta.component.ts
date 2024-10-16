import { Component } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss'
})
export class EncuestaComponent {
  successMessage : string = '';

  encuestaForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private firebaseService: FirebaseService) {
    this.encuestaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      apellido: ['', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ\s]+$/)]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99), Validators.pattern(/^[0-9]+$/)]],
      telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Solo 10 dígitos
      mascotaSi: [false],
      mascotaNo: [false],
      colorFavorito: ['', [Validators.required]],
      generoFavorito: ['', [Validators.required]]
    });
  }

  async enviarEncuesta(): Promise<void> {
    if (this.encuestaForm.valid) {
        const datosEncuesta = this.encuestaForm.value;
        try {
            await this.firebaseService.guardarDatosEncuesta(datosEncuesta);
            
            this.successMessage = '¡Encuesta enviada con éxito!';
            
            this.encuestaForm.reset();

            setTimeout(() => {
                this.successMessage = '';
            }, 3000);
        } catch (error) {
            console.error('Error al enviar la encuesta:', error);
        }
    } else {
        console.log('El formulario no es válido');
    }
}

onMascotaChange(isMascotaSi: boolean) {
  if (isMascotaSi) {
    this.encuestaForm.patchValue({ mascotaSi: true, mascotaNo: false });
  } else {
    this.encuestaForm.patchValue({ mascotaSi: false, mascotaNo: true });
  }
}

volverAlHome() {
  this.router.navigate(['/home']);
}


}
