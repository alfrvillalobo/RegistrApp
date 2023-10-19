import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard'

const redirectToLogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'main',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'recuperar-clave',
    loadChildren: () => import('./pages/recuperar-clave/recuperar-clave.module').then( m => m.RecuperarClavePageModule)
  },
  {
    path: 'escanear',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/escanear/escanear.module').then( m => m.EscanearPageModule)
  },
  {
    path: 'asistencia',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'qr-response',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/qr-response/qr-response.module').then( m => m.QRResponsePageModule)
  },
  {
    path: 'resul-qr',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./modals/resul-qr/resul-qr.module').then( m => m.ResulQrPageModule)
  },
  {
    path: 'weather',
    canActivate:[AngularFireAuthGuard],
    data:{ authGuardPipe : redirectToLogin },
    loadChildren: () => import('./pages/weather/weather.module').then( m => m.WeatherPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
