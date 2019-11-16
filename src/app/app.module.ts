import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { ValoresYConvivenciaComponent } from './valores-y-convivencia/valores-y-convivencia.component';
import { ProyectoSolidarioComponent } from './proyecto-solidario/proyecto-solidario.component';
import { AdmisionComponent } from './admision/admision.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'valores-y-convivencia', component: ValoresYConvivenciaComponent },
  { path: 'admision', component: AdmisionComponent },
  { path: 'contacto', component: ContactoComponent},
  { path: 'proyecto-solidario', component: ProyectoSolidarioComponent}, 
  { path:'', component: InicioComponent, pathMatch: 'full' },
  { path:'**', redirectTo: '/error404', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    HistoriaComponent,
    ValoresYConvivenciaComponent,
    ProyectoSolidarioComponent,
    AdmisionComponent,
    ContactoComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }