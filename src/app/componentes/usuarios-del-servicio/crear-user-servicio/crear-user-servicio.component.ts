import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-crear-user-servicio',
  templateUrl: './crear-user-servicio.component.html',
  styleUrls: ['./crear-user-servicio.component.scss']
})
export class CrearUserServicioComponent implements OnInit {

  public idPaciente: number;

  constructor(private title:Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Crear usuarios del servicio')
  }


}
