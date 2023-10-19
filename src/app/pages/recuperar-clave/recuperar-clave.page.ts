import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage {
  email: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  async resetPassword() {
    try {
      await this.afAuth.sendPasswordResetEmail(this.email);
      this.presentAlert('Se ha enviado un mensaje de recuperación a su correo.', 'Recuperación');
    } catch (error) {
      this.presentAlert('Error al enviar el correo de recuperación.', 'Error');
      console.error('Error al enviar correo de recuperación de contraseña', error);
    }
  }

  async presentAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}

