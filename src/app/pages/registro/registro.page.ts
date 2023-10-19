import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string = '';
  contrasena: string = '';
  nombre: string = '';

  constructor(
    private auth: AngularFireAuth,
    private helper: HelperService,
    private router: Router,
    private storageService: StorageService,
    private locationService: LocationService
  ) {}

  ngOnInit() {}

  async registro() {
    const loader = await this.helper.showLoader('Cargando');

    // Agregar validación del email y contraseña
    if (!this.isValidEmail(this.email)) {
      await this.helper.showAlert('El formato de correo no corresponde', 'Error de validación');
      loader.dismiss();
      return;
    }

    if (this.contrasena.length < 6) {
      await this.helper.showAlert(
        'La contraseña no cumple con el mínimo de caracteres',
        'Error de validación'
      );
      loader.dismiss();
      return;
    }

    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.email, this.contrasena);

      var user = [
        {
          correo: this.email,
          nombre: this.nombre,
        },
      ];
      this.storageService.guardarUsuario(user);

      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert('Usuario registrado correctamente', 'Información');
    } catch (error: any) {
      if (error.code == 'auth/invalid-email') {
        await this.helper.showAlert('El formato del correo no es válido.', 'Error de validación');
      }
      loader.dismiss();
    }
  }

  logOut() {
    this.router.navigateByUrl('home');
  }

  // Función para validar el formato del email
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
