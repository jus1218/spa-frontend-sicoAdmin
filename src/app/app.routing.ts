import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule,Route } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { UserRegisterComponent } from "./components/user/user-register/user-register.component";
import { ErrorComponent } from './components/error/error.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CondominoListComponent } from './components/condomino/condomino-list/condomino-list.component';
import { CondominoRegisterComponent } from './components/condomino/condomino-register/condomino-register.component';

const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {path:'registro-usuario',component:UserRegisterComponent},
    {path:'lista-usuario',component:UserListComponent},
    {path:'registro-condomino',component:CondominoRegisterComponent},
    {path:'lista-condomino',component:CondominoListComponent},
    {path:'**',component:ErrorComponent},
];

export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);