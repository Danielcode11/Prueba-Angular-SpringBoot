import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaInformacionComponent } from './components/entrada-informacion/entrada-informacion.component';
import { VisualizarComponent } from './components/visualizar/visualizar.component';

const routes: Routes = [
  { path: 'entrada-informacion', component: EntradaInformacionComponent },
  { path: 'visualizar', component: VisualizarComponent },
  
  {
    path:'',
    redirectTo:'entrada-informacion',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

