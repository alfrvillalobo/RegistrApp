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

  toggleInfo1() {
    this.showInfo1 = !this.showInfo1;
  }

  toggleInfo2() {
    this.showInfo2 = !this.showInfo2;
  }
  toggleInfo3() {
    this.showInfo3 = !this.showInfo3;
  }
  toggleInfo4() {
    this.showInfo4 = !this.showInfo4;
  }
}
