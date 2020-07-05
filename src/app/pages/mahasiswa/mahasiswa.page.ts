import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  display = true;
  userId: string;
  listMahasiswa = [];

  constructor(private router: Router,
    private mahasiswaService: MahasiswaService) {
    const list = window.localStorage.getItem('list');
    this.display = list === 'true' ? true : false;

  }

  ngOnInit() {
    this.userId = window.localStorage.getItem('user_mahasiswa_id');
    this.getUserMahasiswa(this.userId);
  }

  getUserMahasiswa(id){
    this.mahasiswaService.getListMahasiswa()
      .subscribe(data => {
        const userListMahasiswa = data.filter(mahasiswa => mahasiswa.id === id);
        if(userListMahasiswa.length === 0){
          return;
        }
        this.listMahasiswa = userListMahasiswa[0].listMahasiswa;
      });
  }


  addMahasiswa(){
    this.router.navigate(['/add-mahasiswa', 'Untagged'])
  }

  changeDisplay(){
    this.display = !this.display;
    if(this.display){
      window.localStorage.setItem('list', 'true');
    }else{
      window.localStorage.setItem('list', 'false');
    }
  }


}
