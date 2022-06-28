import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-showcase',
  templateUrl: './footer-showcase.component.html',
  styleUrls: ['./footer-showcase.component.css']
})
export class FooterShowcaseComponent implements OnInit {

  footerImg:String = '../assets/hop.jpeg'
  constructor() { }

  ngOnInit(): void {
  }

}
