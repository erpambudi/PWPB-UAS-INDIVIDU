import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddMahasiswaPage } from './add-mahasiswa.page';

describe('AddMahasiswaPage', () => {
  let component: AddMahasiswaPage;
  let fixture: ComponentFixture<AddMahasiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMahasiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
