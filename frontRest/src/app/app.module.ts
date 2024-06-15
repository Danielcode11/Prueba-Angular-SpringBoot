import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntradaInformacionComponent } from './components/entrada-informacion/entrada-informacion.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaInformacionComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
