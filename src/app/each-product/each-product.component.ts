import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { itemList } from '../items';


@Component({
  selector: 'app-each-product',
  templateUrl: './each-product.component.html',
  styleUrls: ['./each-product.component.css']
})
export class EachProductComponent implements OnInit {

  eachProducts:itemList | undefined = this.productService.getItems();

  productsDetails:Object = {
    productTopText: 'NEW PRODUCT',
    productDetails: this.eachProducts?.product,
    productText: this.eachProducts?.productDetails,
    productBtn: 'ADD TO CART',
    productContent:'productDisplayContent',
    price: this.eachProducts?.price,
    routerLink: '',
    seeProduct: false
  }

  featuresDetails:Object = this.eachProducts?.productFeatures
  featuresImages:Object = this.eachProducts?.productImages

  imgOne:String = this.eachProducts?.productImages.imgFour
  display:Boolean = true
  imgAltOne:String = 'product-logo'
  routerLink:string = ''

  changeRoute(){
    const routes:string[] = ['headphones', 'speakers', 'earphones'];
    const newRoute:string[] = [];

    routes.forEach(item => {
      if(this.route.url.includes(item)){
        newRoute.push(item)
      }
    })

    const [a] = newRoute

    this.routerLink = `/${a}`
  }

  constructor( 
    private productService:ProductsService, 
    private route:Router) { }

  ngOnInit(): void {

    this.changeRoute();

    }
  }
