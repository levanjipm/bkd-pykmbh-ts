import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { AnjabComponent } from './anjab.component';
import { InputAktivitasComponent } from './inputaktivitas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule],
  declarations: [ AppComponent, AnjabComponent, InputAktivitasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
