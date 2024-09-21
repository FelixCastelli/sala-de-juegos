import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  usuario!:any;
  
  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.usuario = this.firebaseService.getCurrentUser();
  }

  irAQuienSoy() {
    this.router.navigate(['/quien-soy']);
    
  }

  async logOut() {
    await this.firebaseService.logOut();
    this.usuario = this.firebaseService.getCurrentUser();
    console.log('Usuario en el componente:', this.usuario);
    this.router.navigate(['/login']);
  }
}
