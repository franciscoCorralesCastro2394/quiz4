import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export interface UserData {
  nombre: string;
  desc: string;
  icono: string;
}

export class AppModule {

  elementosd:UserData = [
    {
      nombre:"Intagran",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    },
    {
      nombre:"Twitter",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    },
    {
      nombre:"FaceBook",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    },
    {
      nombre:"Pinterest",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    },
    {
      nombre:"Google",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    },
    {
      nombre:"Github",
      desc:"bonoinionioniompompomnonóinbói",
      icono:"" 
    }
  ];

 }
