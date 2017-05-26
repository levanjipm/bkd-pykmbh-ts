import { Component } from '@angular/core';

import { Jobdesc } from './jobdesc';
import { Aktivitas } from './aktivitas';

@Component({
	selector: 'inputaktivitas',
	templateUrl: './inputaktivitas.component.html'
})

export class InputAktivitasComponent {
	jobdescription = [
		new Jobdesc(''),
		new Jobdesc('Jobdesc1'),
		new Jobdesc('Jobdesc2'),
		new Jobdesc('Jobdesc3'),
		new Jobdesc('Jobdesc4'),
		new Jobdesc('Jobdesc5')
	];

	public aktivitas = [{aktivitas:'', durasi:'', jobdesc:''}];;
	addAktivitas() {
		this.aktivitas.push({aktivitas:'', durasi:'', jobdesc:''})
	}
	
	submitted = false;
	onSubmit() { this.submitted = true; }
	
}