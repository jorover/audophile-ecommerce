import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {

  showCaseContainer:String = "showCaseContainer"
  showCaseImg:String='../assets/sp.png'
  link:String = 'zx9-speaker'
  products:Object = {
    productDetails: 'ZX9 SPEAKER',
    productText: 'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound',
    productBtn: 'SEE PRODUCT',
    productContent:'showCaseContent',
    routerLink:['speakers', this.link],
    seeProduct: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
