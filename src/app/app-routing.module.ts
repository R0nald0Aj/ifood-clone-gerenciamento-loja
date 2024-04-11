import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DadosLojaComponent } from './page/dados-loja/dados-loja.component';
import { TaxtempoComponent } from './page/taxtempo/taxtempo.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { IndexComponent } from './page/index/index.component';

const routes: Routes = [
   {
    path:'' ,redirectTo : 'login',

    pathMatch: 'full',
    title : 'login'
  },
  {
    path:'login' ,
    component:LoginComponent,
    pathMatch: 'full',
    title : 'login'
  },
  {
    path : 'cadastro',
    component : CadastroComponent,
    title : "Cadastre-se"
  },
  {
    path:'home',
    component :HomePageComponent,
    title :'Home' ,
    children : [
      {
        path:'home',
        component : IndexComponent,
        title : "Loja"
      },
      {
        path:'dadosloja',
        component : DadosLojaComponent,
        title : "Dados Da Loja"
      },
      {
          path:'taxatempo',
          component : TaxtempoComponent,
          title : "Taxas & Tempo"
      },
      {
        path:'cardapio',
        component : CardapioComponent,
        title : "Cardapío"
      }
      
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
