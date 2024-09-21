import { inject, Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from '@angular/fire/app';
import { Auth, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { enviromentConfig } from '../enviroment.config';
import { getFirestore } from '@firebase/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';


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
      console.log('Usuario logeado correctamente');
    } catch (error) {
      throw error;
    }

  }

  async registro(email: string, contrasenia: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, contrasenia);
      console.log('Usuario registrado correctamente');
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

}
