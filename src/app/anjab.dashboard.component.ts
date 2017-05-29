import { Component } from '@angular/core';

@Component({
	selector: 'anjab.dashboard',
	templateUrl: './anjab.dashboard.component.html'
})

export class AnjabDashboardComponent {

	skpd = ['Badan Kepegawaian Daerah', 'Badan Penanaman Modal Daerah']
	
	jabatan = ['Semua' 'Pengolah Data Kepegawaian', 'Pengadministrasi Kepegawaian']
	
	submitted = false;
	onSubmit() { this.submitted = true; }
	
}