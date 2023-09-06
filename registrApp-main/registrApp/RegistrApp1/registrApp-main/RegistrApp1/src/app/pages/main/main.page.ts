import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController }  from '@ionic/angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router, private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  asistencia(){
    this.router.navigateByUrl("asistencia");
  }
  home(){
    this.router.navigateByUrl("home");
  }
  escanear(){
    this.router.navigateByUrl("escanear");
  }
  perfil(){
    this.router.navigateByUrl("perfil");
  }

  async confirmLogout() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Está seguro de que desea cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.navCtrl.navigateRoot('/home');
          }
        }
      ]
    });
  
    await alert.present();
  }
}
