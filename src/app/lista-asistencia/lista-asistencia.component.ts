import { Component, OnInit } from '@angular/core';
import { Alumno } from '../shared/alumno';
import { alumnos } from '../shared/mocks/alumno-mock';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.css']
})
export class ListaAsistenciaComponent implements OnInit {

  alumnos : Alumno[];
  alumnoSeleccionado : Alumno; 

  constructor() { }

  ngOnInit(): void {
    this.alumnos = alumnos;
  }

  mostrarDatos(alumno: Alumno, event: any){
    debugger;
    this.alumnoSeleccionado = alumno;
  }

  deleteItem(alumno : Alumno){
    this.alumnos = this.alumnos.filter(a => {
      return a != alumno;
    });
  }
}
