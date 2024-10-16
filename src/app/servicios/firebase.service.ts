import { inject, Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore, collection, addDoc, query, orderBy, collectionData } from '@angular/fire/firestore';
import { enviromentConfig } from '../enviroment.config';
import { getFirestore } from '@firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private app: FirebaseApp;
  public firestore: Firestore;
  public auth: Auth;
  currentUser: User | null = null;

  constructor() {
    this.app = initializeApp(enviromentConfig);
    this.firestore = getFirestore(this.app);
    this.auth = getAuth(this.app);
    this.initializeAuthListener();

  }

  private initializeAuthListener(): void {
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.currentUser = user;
    });

  }

  public getCurrentUser(): User | null {
    return this.currentUser;

  }

  async logIn(email: string, contrasenia: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, contrasenia);
    } catch (error) {
      throw error;
    }

  }

  async registro(email: string, contrasenia: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, contrasenia);
    } catch (error) {
      throw error;
    }

  }

  getUserLogged(){
    let afAuth = inject(AngularFireAuth);
    return afAuth.authState;
  }

  async logOut(): Promise<void> {
    try {
      await signOut(this.auth);
      console.log('Usuario deslogueado correctamente');
    } catch (error) {
      console.error('Error al desloguearse', error);
    }
  }

  async subirPuntosJuego(juego: string, puntos: number): Promise<void> {
    try {
      if (puntos > 0 && this.currentUser) {
        let col = collection(this.firestore, juego);
        let obj = {
          fecha: new Date(), 
          usuario: this.currentUser.email,
          puntos: puntos
        };
        await addDoc(col, obj);
        console.log('Puntos subidos correctamente');
      }
    } catch (error) {
      console.error('Error al subir los puntos', error);
      throw error;
    }
  }

  traerPuntosJuego(juego: string): Observable<any[]> {
    try {
      const colRef = collection(this.firestore, juego);
      const q = query(colRef, orderBy('puntos', 'desc'));
      return collectionData(q, { idField: 'id' });
    } catch (error) {
      console.error('Error al traer los puntos del juego', error);
      throw error;
    }
  }

  async guardarDatosEncuesta(datosEncuesta: any): Promise<void> {
    try {
      if (this.currentUser) {
        const encuestaCollection = collection(this.firestore, 'encuestas');
        const encuestaData = {
          ...datosEncuesta,  // Incluye los datos de la encuesta
          usuario: this.currentUser.email, // Identifica al usuario por su email
          fecha: new Date() // Guarda la fecha de la encuesta
        };
        await addDoc(encuestaCollection, encuestaData); // Almacena en Firestore
        console.log('Datos de la encuesta guardados correctamente');
      } else {
        throw new Error('No hay un usuario autenticado');
      }
    } catch (error) {
      console.error('Error al guardar los datos de la encuesta:', error);
      throw error;
    }
  }

}
