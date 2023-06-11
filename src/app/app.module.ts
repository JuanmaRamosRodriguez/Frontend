import { CartasComponent } from './components/cartas/cartas.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoComponent } from './components/info/info.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FotosPageComponent } from './pages/fotos-page/fotos-page.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Login2Component } from './components/login2/login2.component';
import { Login2PageComponent } from './pages/login2-page/login2-page.component';
import { LateralComponent } from './components/lateral/lateral.component';
import { CompraComponent } from './components/compra/compra.component';
import { CompraPageComponent } from './pages/compra-page/compra-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BotonfotoComponent } from './components/botonfoto/botonfoto.component';
import { BotonfotoPageComponent } from './pages/botonfoto-page/botonfoto-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    LoginPageComponent,
    InicioPageComponent,
    MenuComponent,
    BannerComponent,
    InfoComponent,
    InfoPageComponent,
    PerfilComponent,
    PerfilPageComponent,
    FotosComponent,
    FotosPageComponent,
    InicioComponent,
    CartasComponent,
    Login2Component,
    Login2PageComponent,
    LateralComponent,
    CompraComponent,
    CompraPageComponent,
    BotonfotoComponent,
    BotonfotoPageComponent,
    ProfileComponent,
    ProfilePageComponent
  ],
  imports: [
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
