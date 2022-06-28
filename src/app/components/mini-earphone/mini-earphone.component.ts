import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-earphone',
  templateUrl: './mini-earphone.component.html',
  styleUrls: ['./mini-earphone.component.css']
})
export class MiniEarphoneComponent implements OnInit {

  earphoneContent:any = {
    earphoneImg: '../assets/ep.jpeg',
    earphoneContainer:'earphoneContainer',
    earphoneBg: 'earphoneBg'
    
  }

  link:String= 'yx1-earphones'

  products:Object = {
    productDetails: 'YX1 EARPHONES',
    productBtn: 'SEE PRODUCT',
    productContent:'earphoneDisplay',
    routerLink:['earphones', this.link],
    seeProduct: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
