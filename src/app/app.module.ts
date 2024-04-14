import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormUserComponent } from './components/form-user/form-user.component';

import { HomePageComponent } from './page/home-page/home-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageComponent } from './components/message/message.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { DadosLojaComponent } from './page/dados-loja/dados-loja.component';
import { TaxtempoComponent } from './page/taxtempo/taxtempo.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IndexComponent } from './page/index/index.component';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { TableInfoComponent } from './components/table-info/table-info.component'




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    FormUserComponent,
    HomePageComponent,
    LoadingComponent,
    MessageComponent,
    NavMenuComponent,
    DadosLojaComponent,
    TaxtempoComponent,
    CardapioComponent,
    IndexComponent,
    CardInfoComponent,
    TableInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule, 
    FontAwesomeModule, 
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
