import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnjabComponent } from './anjab.component';
import { InputAktivitasComponent } from './inputaktivitas.component';

const routes: Routes = [
  { path: 'anjab', component: AnjabComponent }
  { path: 'inputaktivitas', component: InputAktivitasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
