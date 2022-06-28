import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {


  headphoneOne:Object = {
    productTopText: 'NEW PRODUCT',
    productDetails: 'ZX9 SPEAKER',
    productText: 'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent',
    routerLink: 'zx9-speaker',
    seeProduct: true
  }

  headphoneTwo:Object = {
    productDetails: 'ZX7 SPEAKER',
    productText: 'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent displayLeft',
    routerLink: 'zx7-speaker',
    seeProduct: true
  }

  display:boolean = true
  nextDisplay:boolean = false
  imgOne:String = '../assets/ssp0.jpeg'
  imgTwo:String = '../assets/sps.jpeg'
  imgAltOne:String = 'zx9-speaker-logo'
  imgAltTwo:String = 'zx7-speaker-logo'

  constructor() { }

  ngOnInit(): void {
  }

}


