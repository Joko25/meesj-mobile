import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MesjidPage } from './mesjid.page';

describe('MesjidPage', () => {
  let component: MesjidPage;
  let fixture: ComponentFixture<MesjidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesjidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MesjidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
