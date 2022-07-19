import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { EditarContribuinteComponent } from './editar-contribuinte/editar-contribuinte.component';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalhesComponent } from './detalhes/detalhes.component';

const appRoutes: Routes = [
  {path: '', component: PrincipalComponent,},
  {path: 'novoContribuinte', component: EditarContribuinteComponent},
  {path: 'editarContribuintes/:id', component: EditarContribuinteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EditarContribuinteComponent,
    DetalhesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
