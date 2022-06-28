import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { itemList } from '../items';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {
  
  innerItems: itemList | undefined = this.productService.getItems();

  headphoneOne:Object = {
    productTopText: 'NEW PRODUCT',
    productDetails: 'XX99 MARK II HEADPHONES',
    productText: 'Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent',
    routerLink: 'xx99-mark-headphones',
    seeProduct: true
  }

  headphoneTwo:Object = {
    productDetails: 'XX59 HEADPHONES',
    productText: 'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent displayLeft',
    routerLink: 'xx59-headphones',
    seeProduct: true
  }

  headphoneThree:Object = {
    productDetails: 'XX99 MARK I HEADPHONES',
    productText: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    productBtn: 'SEE PRODUCT',
    productContent:'productDisplayContent',
    routerLink: 'xx99-mark-one-headphones',
    seeProduct: true
  }

  display:boolean = true
  nextDisplay:boolean = false
  imgOne:String = '../assets/hh1.jpeg'
  imgTwo:String = '../assets/hh2.jpeg'
  imgThree:String = '../assets/hh0.jpeg'
  imgAltOne:String = 'xx99-headphones-logo'
  imgAltTwo:String = 'xx59-headphones-logo'
  imgAltThree:String = 'xx99-headphone1-logo'
  item:any = document.querySelector('.innerProducts')
  show:boolean = true


  constructor( private productService: ProductsService ) { }

  ngOnInit(): void {
    
  }

}



