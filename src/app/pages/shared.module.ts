import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MahasiswaDisplayComponent } from '../components/mahasiswa-display/mahasiswa-display.component';
import { IonicModule } from '@ionic/angular';
import { TagsModalPage } from './tags-modal/tags-modal.page';



@NgModule({
  declarations: [
    MahasiswaDisplayComponent,
    TagsModalPage
  ],
  exports: [MahasiswaDisplayComponent],
  entryComponents: [TagsModalPage],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ]
})
export class SharedModule { } 
