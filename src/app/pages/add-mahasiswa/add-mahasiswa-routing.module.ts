import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMahasiswaPage } from './add-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: AddMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMahasiswaPageRoutingModule {}
