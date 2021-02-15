import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from 'popover.component';

@Component({
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  @Input('data') data;

  constructor(public popoverController: PopoverController) { 
    
  }

  ngOnInit() {
    console.log("#data popover", this.data)
  }

  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //     component: 'popover.component.html',
  //     cssClass: 'my-custom-class',
  //     event: ev,
  //     translucent: true
  //   });
  //   return await popover.present();
  // }

  ClosePopover() {
    this.popoverController.dismiss();
  }
}
