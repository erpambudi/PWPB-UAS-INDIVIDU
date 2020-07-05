import { Component, OnInit, Input } from '@angular/core';
import { Mahasiswa } from 'src/app/services/mahasiswa.interface';

@Component({
  selector: 'app-mahasiswa-display',
  templateUrl: './mahasiswa-display.component.html',
  styleUrls: ['./mahasiswa-display.component.scss'],
})
export class MahasiswaDisplayComponent implements OnInit {
  @Input() listDisplay: boolean;
  @Input() listMahasiswa: Mahasiswa[];

  constructor() { }

  ngOnInit() {
  }

}
