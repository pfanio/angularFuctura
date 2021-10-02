import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { ListagemComponent } from './listagem/listagem.component';
import { DadosComponent } from './dados/dados.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    ListagemComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
