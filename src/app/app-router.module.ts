import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComunesComponent } from './ventas/pages/comunes/comunes.component';
import { NumerosComponent } from './ventas/pages/numeros/numeros.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes: Routes = [
  {
    path: "",
    component: NoComunesComponent,
    pathMatch: "full"
  },
  {
    path: "numeros",
    component: NumerosComponent
  },
  {
    path: "comunes",
    component: ComunesComponent
  },
  {
    path: "ordenado",
    component: OrdenarComponent
  }
  ,
  {
    path: "**",
    redirectTo: "/"
    // component: ComunesComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
