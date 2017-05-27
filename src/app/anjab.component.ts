import { Component } from '@angular/core';

import { Unit } from './unit';

@Component({
	selector: 'anjab',
	templateUrl: './anjab.component.html'
})

export class AnjabComponent {
	unit_kerja = [
		new Unit('Eselon ' + 'IIB', 'Kepala Badan Penanaman Modal Daerah dan Pelayanan Terpadu Satu Pintu'),
		new Unit('Eselon ' + 'IIIA', 'Sekretaris'),
		new Unit('Eselon ' + 'IVA', 'Kepala Sub Bagian Kepegawaian'),
		new Unit(' ' + '', 'Pengadministrasi Kepegawaian')
	];
	
	korelasi_jabatan = ['', 'Kepala Badan Penanaman Modal Daerah dan Pelayanan Terpadu Satu Pintu', 'Sekretaris', 'Kepala Sub Bagian Kepegawaian', 'JFU Sederajat']
	
	golongan_ruang = ['IIa', 'IIb', 'IIc', 'IIIa', 'IIIb', 'IIIc', 'IIId']
	
	pendidikan = ['SD', 'SMP', 'SMA', 'D1', 'D2', 'D3', 'S1', 'S2', 'S3']
	
	penjenjangan = ['', 'Kerja Praktek', 'Magang']
	
	teknis = ['', 'Diklat Kebendaharaan', 'Diklat Pengolahan Data', 'Kursus Mengemudi']
	
	SSJ = ['Sering', 'Sedang', 'Jarang']
	
	bakat_kerja = ['', '(G) Intelegensi, memahami instruksi/prinsip', '(V) Verbal, kemampuan untuk memahami arti kata - kata dan penggunannya secara tepat dan efektif']
	
	tempramen_kerja = ['', '(P) Menyesuaikan diri dalam berhubungan dengan orang lain lebih dari hanya penerimaan dan perbuatan instruksi', '(R) Kemampuan menyesuaikan diri dalam kegiatan-kegiatan yang berulang, atau secara terus menerus melakukan kegiatan yang sama, sesuai dengan perangkat prosedur, urutan atau kecepatan yang tertentu']
	
	minat_kerja = ['', '1.b. melakukan kegiatan-kegiatan yang berhubungan dengan komunikasi data', '3.b. melakukan kegiatan-kegiatan yang bersifat abstrak dan kreatif']
	
	fungsi_kerja = ['', 'D2: Menganalisa', 'D3: Menyusun', 'D4: Menghitung', 'D5: Membandingkan/Mencocokkan', 'D6: Menyalin', 'O6: Berbicara (Informasi)', 'O7: Melayani', 'O8: Menerima Instruksi', 'B1: Mengerjakan presisi']
	
	public uraian_tugas = [{tugas:''}];
	addTugas() {
		this.uraian_tugas.push({tugas:''})
	}
	
	public bahan_kerja = [{bahan:'', kegunaan:''}]
	addBahan() {
		this.bahan_kerja.push({bahan:'', kegunaan:''})
	}
	
	public alat_kerja = [{alat:'', kegunaan:''}]
	addAlat() {
		this.alat_kerja.push({alat:'', kegunaan:''})
	}
	
	public hasil_kerja = [{hasil:''}];
	addHasil() {
		this.hasil_kerja.push({hasil:''})
	}
	
	public tanggung_jawab = [{tanggung:''}];
	addTanggung() {
		this.tanggung_jawab.push({tanggung:''})
	}
	
	public wewenang = [{wewenang:''}];
	addWewenang() {
		this.wewenang.push({wewenang:''})
	}
	
	public korelasi = [{jabatan:'', unit:'', hal:''}];;
	addKorelasi() {
		this.korelasi.push({jabatan:'', unit:'', hal:''})
	}
	
	public resiko = [{resiko:'', penyebab:''}];;
	addResiko() {
		this.resiko.push({resiko:'', penyebab:''})
	}
	
	public bakat = [{bakat:''}];;
	addBakat() {
		this.bakat.push({bakat:''})
	}
	
	public tempramen = [{tempramen:''}];;
	addTempramen() {
		this.tempramen.push({tempramen:''})
	}
	
	public minat = [{minat:''}];;
	addMinat() {
		this.minat.push({minat:''})
	}
	
	public fungsi = [{fungsi:''}];;
	addFungsi() {
		this.fungsi.push({fungsi:''})
	}
	
	public prestasi_kerja = [{prestasi:''}];
	addPrestasi() {
		this.prestasi_kerja.push({prestasi:''})
	}
	
	submitted = false;
	onSubmit() { this.submitted = true; }
	
}