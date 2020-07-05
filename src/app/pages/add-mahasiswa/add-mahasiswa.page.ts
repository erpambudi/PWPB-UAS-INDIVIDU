import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TagsModalPage } from '../tags-modal/tags-modal.page';
import { Mahasiswa, UserMahasiswa } from 'src/app/services/mahasiswa.interface';
import { Router } from '@angular/router';
import { MahasiswaService } from 'src/app/services/mahasiswa.service';

@Component({
  selector: 'app-add-mahasiswa',
  templateUrl: './add-mahasiswa.page.html',
  styleUrls: ['./add-mahasiswa.page.scss'],
})
export class AddMahasiswaPage implements OnInit {
  tagColor = 'warning';
  tagName = 'Untagged';
  favorite = false;
  description: string;
  currentDate = new Date();
  mahasiswa: Mahasiswa;
  userId: string;
  listMahasiswa = [];
;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private mahasiswaService: MahasiswaService

  ) { }

  ngOnInit() {
    this.userId = window.localStorage.getItem('user_mahasiswa_id');
    if(!this.userId){
      return;
    }
    this.getListMahasiswa(this.userId);
  }

  getListMahasiswa(id){
    this.mahasiswaService.userListMahasiswa(id)
      .subscribe((data: UserMahasiswa) => {
        this.listMahasiswa = data.listMahasiswa;
      });
  }

  async showTagsModal(){
    const modal = await this.modalCtrl.create({
      component: TagsModalPage
    });
    modal.onDidDismiss()
      .then((value) => {
        if(value.data){
          this.tagColor = value.data.color;
          this.tagName = value.data.tag
        }
      })

    return await modal.present();
  }

  favoriteMahasiswa(){
    this.favorite = !this.favorite;
  }

  addMahasiswa(){
    if (!this.description){
      return;
    }

    this.mahasiswa = {
      mahasiswaId: 1,
      description: this.description,
      tagName: this.tagName,
      tagColor: this.tagColor,
      date: new Date().toISOString(),
      favorite: this.favorite
    };

    if(!this.userId){
      this.mahasiswaService.addUserListMahasiswa(this.mahasiswa)
        .then((data) => {
          console.log(data);
          window.localStorage.setItem('user_mahasiswa_id', data.id);
          this.router.navigate(['/mahasiswa'], {queryParams: {id: data.id}});
        })
        .catch(err => console.log(err));
    }else{
      this.mahasiswaService.addMoreListMahasiswa(this.userId, this.mahasiswa, this.listMahasiswa)
        .then(() => {
          this.router.navigate(['/mahasiswa']);
        })
        .catch(err => console.log(err));
    }

  }


}
