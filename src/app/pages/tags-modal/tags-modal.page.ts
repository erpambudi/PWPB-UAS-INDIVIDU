import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tags-modal',
  templateUrl: './tags-modal.page.html',
  styleUrls: ['./tags-modal.page.scss'],
})
export class TagsModalPage{
  colorname: string;
  tags = [
    { name: "S1 - Informatika", icon: "bookmark", color: "primary" },
    { name: "S1 - Rekayasa Perangkat Lunak", icon: "bookmark", color: "secondary" },
    { name: "S1 - Sistem Informasi", icon: "bookmark", color: "tertiary" },
    { name: "S1 - Teknik Telekomunikasi", icon: "bookmark", color: "success" },
    { name: "S1 - Teknik Industri", icon: "bookmark", color: "warning" },
  ]

  constructor(
    private modalCtrl: ModalController
  ) { }

  selectTag(e){
    const result = this.tags.find(tag => tag.name === e.detail.value);
    this.modalCtrl.dismiss({tag: e.detail.value, color: result.color});
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

}
