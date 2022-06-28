import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { cartItem } from '../cart';


@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cartItems:cartItem[] = JSON.parse(localStorage.getItem('All Cart') || "")
  subTotal:number[] = []
  total:any = []
  newTotal:number = 0
  showCart:boolean = true
  itemCount:number = 0
  item:string = 'item'
  totalItems:any = {
    subtotal: 0,
    shippingCost: '$11.50',
    vat: '4.8%',
    grandTotal: 0
  }

  counter(event:Event, product:any) {
     if((event.target as HTMLElement).innerText === '-'){
          if(product.amount <= 1){
            product.amount = 1
          } else {
            product.amount = product.amount - 1
            this.updateTotal(product.price, 'subract')
          }
     } else {
          product.amount = product.amount + 1
          this.updateTotal(product.price, 'add')
     }

     return localStorage.setItem('All Cart', JSON.stringify(this.cartItems))


   }


   delItems(item:cartItem){
     let allItems:cartItem[] = JSON.parse(localStorage.getItem('All Cart') || "");
      this.cartItems = allItems.filter(t => {
          return t.name !== item.name
      })
      localStorage.setItem('All Cart', JSON.stringify(this.cartItems))
      this.productService.cartCounting();
      this.displayNoCart()
      this.totalItems.subtotal = this.totalItems.subtotal - (item.amount * parseFloat(item.price))
      this.totalItems.grandTotal = this.totalItems.subtotal + parseFloat(this.totalItems.shippingCost.replace('$', '')) + parseFloat(this.totalItems.vat.replace('%', ''));
      this.totalItems.subtotal = this.totalItems.subtotal.toFixed(2);
      this.totalItems.grandTotal = this.totalItems.grandTotal.toFixed(2);
      this.itemCount = this.cartItems.length;
      this.item = this.itemCount <= 1 ? 'item' : 'items'
      localStorage.setItem('Grand Total', JSON.stringify(this.totalItems.grandTotal))
   }

   calculateTotal(){
     this.total = this.cartItems.forEach(item => {
        this.subTotal.push(item.amount * parseFloat(item.price))
     })
     this.totalItems.subtotal = this.subTotal.length < 1 ? 0 : this.subTotal.reduce((totalVal:number, val:number) => totalVal + val);
     this.totalItems.grandTotal = this.totalItems.subtotal + parseFloat(this.totalItems.shippingCost.replace('$', '')) + parseFloat(this.totalItems.vat.replace('%', ''));
     this.totalItems.subtotal = parseFloat(this.totalItems.subtotal).toFixed(2)
     this.totalItems.grandTotal = parseFloat(this.totalItems.grandTotal).toFixed(2)
     this.itemCount = this.cartItems.length
     localStorage.setItem('Grand Total', JSON.stringify(this.totalItems.grandTotal))
   }

   updateTotal(price:string, check:string){    
    this.totalItems.subtotal =  check === 'add' ? parseFloat(this.totalItems.subtotal) + parseFloat(price) : parseFloat(this.totalItems.subtotal) - parseFloat(price)
    this.totalItems.grandTotal = (this.totalItems.subtotal + parseFloat(this.totalItems.shippingCost.replace('$', '')) + parseFloat(this.totalItems.vat.replace('%', '')));
    this.totalItems.subtotal = this.totalItems.subtotal.toFixed(2);
    this.totalItems.grandTotal = this.totalItems.grandTotal.toFixed(2);
    localStorage.setItem('Grand Total', JSON.stringify(this.totalItems.grandTotal))
   }

   displayNoCart(){
     if(this.cartItems.length < 1){
       this.showCart = false;
     }
     this.item = this.itemCount <= 1 ? 'item' : 'items'
   }


  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.calculateTotal();
    this.displayNoCart();
  }

}
