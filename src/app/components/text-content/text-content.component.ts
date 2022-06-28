import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products.service';


@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.css']
})
export class TextContentComponent implements OnInit {

  @Input() products:any = {
        productTopText:String,
        productDetails:String,
        productBtn:String,
        productText:String,
        productContent:String,
        routerLink:String
  }

  cartCount:number = 1

  counter(event: Event) {
   if ((event.target as HTMLElement).innerText === '-'){
      if(this.cartCount <= 1 ){
        this.cartCount = 1
      } else {
        this.cartCount = this.cartCount - 1
      }
   } else {
      this.cartCount = this.cartCount + 1
   }
  }

  addToCart(products:Object, cartCount:number, event: Event){
    this.productService.addToCart(products, cartCount, event)
  }

  check(item:String){
    localStorage.setItem('Product Name', JSON.stringify(item))
  }

  constructor( private productService:ProductsService) {

   }

  ngOnInit(): void {
    this.cartCount 
  }

}
