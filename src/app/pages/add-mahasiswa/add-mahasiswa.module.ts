import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMahasiswaPageRoutingModule } from './add-mahasiswa-routing.module';

import { AddMahasiswaPage } from './add-mahasiswa.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    AddMahasiswaPageRoutingModule
  ],
  declarations: [AddMahasiswaPage]
})
export class AddMahasiswaPageModule {}
