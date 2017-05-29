import { Component } from '@angular/core';

@Component({
	selector: 'abk',
	templateUrl: './abk.component.html'
})

export class ABKComponent {

	skpd = ['Badan Kepegawaian Daerah', 'Badan Penanaman Modal Daerah']
	
	jabatan = ['Semua' 'Pengolah Data Kepegawaian', 'Pengadministrasi Kepegawaian']
	
	submitted = false;
	onSubmit() { this.submitted = true; }
	
}