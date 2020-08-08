import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAsistenciaComponent } from './lista-asistencia/lista-asistencia.component';
import { ListaAsistenciaDetalleComponent } from './lista-asistencia-detalle/lista-asistencia-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAsistenciaComponent,
    ListaAsistenciaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
