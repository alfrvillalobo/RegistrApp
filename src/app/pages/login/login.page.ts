import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  contrasena: string = "";

  constructor(private router: Router, 
              private helperService: HelperService, 
              private storage:StorageService,
              private auth:AngularFireAuth,) {}

  ngOnInit() {}

  logOut() {
    this.router.navigateByUrl("home");
  }

  async login() {
    if (this.email == "") {
      this.helperService.showAlert("Debe ingresar un email.", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      this.helperService.showAlert("Debe ingresar una contraseña.", "Advertencia");
      return;
    }
  
    try {
      const req = await this.auth.signInWithEmailAndPassword(this.email, this.contrasena);
      this.storage.usuarioCorreo = this.email;
      console.log("TOKEN", await req.user?.getIdToken());
      await this.router.navigateByUrl("main");
    } catch (error) {
      // Utiliza el helperService para mostrar una alerta de credenciales incorrectas
      this.helperService.showAlert("Credenciales incorrectas. Por favor, verifique su email y contraseña.", "Error");
    }
  } 
  
  registro() {
      this.router.navigateByUrl("registro");
    }

    recuperar() {
      this.router.navigateByUrl("recuperar-clave");
    }
}