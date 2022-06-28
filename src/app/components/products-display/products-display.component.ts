import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  @Input() products:any
  @Input() display:any
  @Input() imgOne:any 
  @Input() imgTwo:any
  @Input() imgThree:any
  @Input() imgAltOne:any
  @Input() imgAltTwo:any
  @Input() imgAltThree:any


  constructor() { }

  ngOnInit(): void {
  }

}





