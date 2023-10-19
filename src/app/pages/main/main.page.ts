import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(
    private router: Router,
    private helper:HelperService,
    private auth:AngularFireAuth,
    private storage:StorageService,
    private loadingController:LoadingController
    
  ) { }

  ngOnInit() {
  }

  asistencia() {
    this.router.navigateByUrl("asistencia");
  }

  home() {
    this.router.navigateByUrl("home");
  }

  escanear() {
    this.router.navigateByUrl("escanear");
  }

  perfil() {
    this.router.navigateByUrl("perfil");
    
  }

  weather() {
    this.router.navigateByUrl("weather");
  }

  async logOut(){
    //

    var corfirmar = await this.helper.showConfirm("Desea cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      await this.auth.signOut();
      await this.router.navigateByUrl("login");
    }
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Cerrando sesión...', 
    });

    await loading.present();

    return loading;
  }


}

