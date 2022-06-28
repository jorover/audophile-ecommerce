import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerNavBar:String= 'footerNavBar'

  fb:string = '../assets/fb.png'
  tw:string = '../assets/tw.png'
  ig:string = '../assets/ig.png'

  constructor() { }

  ngOnInit(): void {
  }

}
