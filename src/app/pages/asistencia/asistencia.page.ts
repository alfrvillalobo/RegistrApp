import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showInfo1 = false;
  showInfo2 = false;
  showInfo3 = false;
  showInfo4 = false;

  Info1() {
    this.showInfo1 = !this.showInfo1;
  }

  Info2() {
    this.showInfo2 = !this.showInfo2;
  }
  Info3() {
    this.showInfo3 = !this.showInfo3;
  }
  Info4() {
    this.showInfo4 = !this.showInfo4;
  }
}
