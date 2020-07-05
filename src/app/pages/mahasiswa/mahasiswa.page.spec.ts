import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MahasiswaPage } from './mahasiswa.page';

describe('MahasiswaPage', () => {
  let component: MahasiswaPage;
  let fixture: ComponentFixture<MahasiswaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahasiswaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
