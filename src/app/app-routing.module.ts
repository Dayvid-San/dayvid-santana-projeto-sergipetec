import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarContribuinteComponent } from './editar-contribuinte/editar-contribuinte.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'PrincipalComponent',
    pathMatch: 'full'
  },
  {
    path: 'editarContribuintes/:id',
    component: EditarContribuinteComponent
  },
  {
    path: 'novoRegistro',
    component: EditarContribuinteComponent
  },
  {
    path: 'detalhes',
    component: DetalhesComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
