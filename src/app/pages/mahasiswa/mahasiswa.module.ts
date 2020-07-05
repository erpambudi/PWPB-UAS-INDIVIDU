import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahasiswaPageRoutingModule } from './mahasiswa-routing.module';

import { MahasiswaPage } from './mahasiswa.page';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MahasiswaPageRoutingModule
  ],
  declarations: [MahasiswaPage]
})
export class MahasiswaPageModule {}
