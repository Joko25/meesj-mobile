import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data_surat: any;
  data_ayat: any;

  constructor(private route: ActivatedRoute, public apiService:ApiService) { }

  ngOnInit() {
    this.data_surat = [];
    this.data_ayat = [];
    
  }

  ionViewWillEnter(){
    this.route.params.pipe(mergeMap(params => {
      console.log("#param", JSON.parse(params.data)) 
      if(JSON.parse(params.data)){
        this.data_surat = JSON.parse(params.data)
        return this.apiService.getSuratData(this.data_surat.nomor, this.data_surat.ayat)
      }
    })).subscribe(
      data=>{
        console.log("#data surat", data)
        if(data.status == 'ok') this.data_ayat = data.ayat.data;
        console.log("#d", this.data_ayat)
      }
    );
  }

}
