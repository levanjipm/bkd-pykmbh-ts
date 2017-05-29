import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnjabComponent } from './anjab.component';
import { AnjabDashboardComponent } from './anjab.dashboard.component';
import { InputAktivitasComponent } from './inputaktivitas.component';
import { KonfirmAktivitasComponent } from './konfirmaktivitas.component';
import { ABKComponent } from './abk.component';

const routes: Routes = [
  { path: 'anjab', component: AnjabComponent },
  { path: 'anjab.dashboard', component: AnjabDashboardComponent },
  { path: 'inputaktivitas', component: InputAktivitasComponent },
  { path: 'konfirmaktivitas', component: KonfirmAktivitasComponent },
  { path: 'abk', component: ABKComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
