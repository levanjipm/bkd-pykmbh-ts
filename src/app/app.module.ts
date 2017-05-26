import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 	 from '@angular/forms';

import { AppComponent }  from './app.component';
import { AnjabComponent } from './anjab.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnjabComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
