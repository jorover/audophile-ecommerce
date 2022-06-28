import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartLink:String = '../assets/cart.png'
  cartLogo:String = 'cartLogo'
  cartCount:number = 0
  cartCounter:String = 'cartCounter'

  @Input() footerNav:any

  menu:string = '../assets/menu.png'
  dropDownMenu:string = 'dropDownMenu'

  removeMenu(){
    if(this.dropDownMenu === 'dropDownMenu'){
      this.dropDownMenu = 'dropDownMenu removeDropDownMenu'
    } else {
      this.dropDownMenu = 'dropDownMenu'
    }
  }

  removeSideMenu(){
    this.dropDownMenu = 'dropDownMenu'
  }

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.cartCount = this.productService.getItemsNum();
  }

}




