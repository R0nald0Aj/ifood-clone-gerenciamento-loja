import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { HomePageComponent } from './page/home-page/home-page.component';

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
    title :'Home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
