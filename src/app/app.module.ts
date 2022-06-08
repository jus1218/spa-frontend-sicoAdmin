import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { routing,appRoutingProviders } from "./app.routing";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CondominoRegisterComponent } from './components/condomino/condomino-register/condomino-register.component';
import { CondominoListComponent } from './components/condomino/condomino-list/condomino-list.component';
/**
 * SUPER IMPORTANTE:
 *  SI BORRAR POR ERROR UNA CARPETA COMPONENT, EN LA DIRECTIVAS LE VA SILIR ERROR
 *  PORQUE DEBE VENIR A ESTE ARCHIVO Y BORAR EL IMPORT DEL COMPONENT QUE BORRO Y 
 *  QUITAR TAMBIEN EN EL @ NgModule({}) el nombre del componente eliminado
*/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    UserRegisterComponent,
    UserListComponent,
    CondominoRegisterComponent,
    CondominoListComponent,
    
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
