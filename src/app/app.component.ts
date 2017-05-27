import { Component } from '@angular/core';

import { Unit } from './unit';

@Component({
  selector: 'my-app',
  template: `
	<h1>{{title}}</h1>
		<nav>
		  <a routerLink="/anjab" routerLinkActive="active">Analisis Jabatan</a>
		  <a routerLink="/inputaktivitas" routerLinkActive="active">Input Aktivitas</a>
		  <a routerLink="/konfirmaktivitas" routerLinkActive="active">Konfirmasi Aktivitas</a>
		  <a routerLink="/abk" routerLinkActive="active">Analisis Beban Kerja</a>
		</nav>
		<router-outlet></router-outlet>
	`,
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
	title = 'Badan Kepegawaian Daerah';
}