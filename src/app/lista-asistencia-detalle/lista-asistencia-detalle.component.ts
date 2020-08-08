import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../shared/alumno';
@Component({
  selector: 'app-lista-asistencia-detalle',
  templateUrl: './lista-asistencia-detalle.component.html',
  styleUrls: ['./lista-asistencia-detalle.component.css']
})
export class ListaAsistenciaDetalleComponent implements OnInit {

  @Input() alumnoSeleccionado : Alumno;
  @Output() deleteRequest = new EventEmitter<Alumno>();

  lineThrough : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  incrementarInasistencia() {
    this.alumnoSeleccionado.inasistencias++;
  }

  delete(){
    this.lineThrough = this.lineThrough == '' ? 'line-through' : '';
    this.deleteRequest.emit(this.alumnoSeleccionado);
  }
  
}
