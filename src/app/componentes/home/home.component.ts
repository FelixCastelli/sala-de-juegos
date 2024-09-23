import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  usuario!: any;
  
  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.usuario = this.firebaseService.getCurrentUser();

  }

  irAQuienSoy() {
    this.router.navigate(['/quien-soy']);
    
  }

  irALogIn() {
    this.router.navigate(['/login']);
    
  }

  async logOut() {
    await this.firebaseService.logOut();
    this.usuario = this.firebaseService.getCurrentUser();
    this.router.navigate(['/home']);

  }
}
