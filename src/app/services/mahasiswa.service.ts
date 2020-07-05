import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';   

import { 
  AngularFirestore, 
  AngularFirestoreCollection, 
  AngularFirestoreDocument 
} from '@angular/fire/firestore';

import { UserMahasiswa, Mahasiswa } from './mahasiswa.interface';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {
  mahasiswaCollection: AngularFirestoreCollection<UserMahasiswa>;
  mahasiswaDoc: AngularFirestoreDocument<UserMahasiswa>;
  mahasiswa: UserMahasiswa;

  constructor(
    private afs: AngularFirestore
  ) {
    this.mahasiswaCollection = this.afs.collection<UserMahasiswa>('mahasiswa');
   }

   addUserListMahasiswa(pMahasiswa: Mahasiswa){
     this.mahasiswa = {
       listMahasiswa: [pMahasiswa]
     };
     return this.mahasiswaCollection.add(this.mahasiswa);
   }

   userListMahasiswa(id){
    return this.mahasiswaCollection.doc<UserMahasiswa>(id).snapshotChanges().pipe(
      map(actions => {
        return actions.payload.data();
      })
    );
 }

 addMoreListMahasiswa(id: string, pMahasiswa:Mahasiswa, listMahasiswa: Mahasiswa[]){
    this.mahasiswaDoc = this.mahasiswaCollection.doc<UserMahasiswa>(`${id}`);

    if(listMahasiswa.length === 1){
      pMahasiswa.mahasiswaId = listMahasiswa[0].mahasiswaId + 1;
    }else if(listMahasiswa.length > 1){
      pMahasiswa.mahasiswaId = listMahasiswa[listMahasiswa.length - 1].mahasiswaId + 1;
    }

    listMahasiswa.push(pMahasiswa);

    this.mahasiswa = {
      listMahasiswa
    };
    return this.mahasiswaDoc.set(this.mahasiswa);
 }

 getListMahasiswa(){
  return this.mahasiswaCollection.snapshotChanges().pipe(
    map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      })
    );
  }

}
