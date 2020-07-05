import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mahasiswa',
    pathMatch: 'full'
  },
  {
    path: 'mahasiswa',
    loadChildren: () => import('./pages/mahasiswa/mahasiswa.module').then( m => m.MahasiswaPageModule)
  },
  {
    path: 'add-mahasiswa/:tag',
    loadChildren: () => import('./pages/add-mahasiswa/add-mahasiswa.module').then( m => m.AddMahasiswaPageModule)
  },
  {
    path: 'tags-modal',
    loadChildren: () => import('./pages/tags-modal/tags-modal.module').then( m => m.TagsModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
