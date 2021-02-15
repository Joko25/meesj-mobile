import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { PopoverComponent } from './../../components/popover/popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-al-quran',
  templateUrl: './al-quran.page.html',
  styleUrls: ['./al-quran.page.scss'],
})
export class AlQuranPage implements OnInit {

  listSurat: any;

  constructor(
    public apiService: ApiService,
    public router: Router,
    public popoverController:PopoverController
  ) { 
    this.listSurat = []
  }

  ngOnInit() {
    this.getAllSurat();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    
  }

  getAllSurat(){
    //Get list surat 
    this.apiService.listSurat().subscribe(response => {
      console.log(response);
      if(response.status == 'ok') {
        this.listSurat = response.hasil;
      }
    })
  }

  async details(ev: any, data: any) {
    console.log("#data", data)
    const pop = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      componentProps: {
        data: data
      }
    });
    return await pop.present();
  }

  choose(data){
    console.log("#choose", data)
    this.router.navigate(['/detail', { data:JSON.stringify(data) }]);
  }

}
