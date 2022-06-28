import { Injectable } from '@angular/core';
import { allItems } from './allItems';
import { cartItem } from './cart';
import { itemList } from './items';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  filteredItem:itemList | undefined
  cartItems:cartItem[] =  []
  cartCounter:number = 0


  getItems(){
      let bb = JSON.parse(localStorage.getItem('Product Name') || '');
      this.filteredItem = allItems.find(item => {
        return item.product === bb
      })

      return this.filteredItem
  }

  addToCart(products:any, cartCount:number, event: Event){
    const newCartItems:any = {
        name: products.productDetails,
        amount: cartCount,
        price: products.price,
        img: this.filteredItem?.productImages.imgFour
    }

    this.noRepeat(this.cartItems, newCartItems)
    this.cartCounting()
    this.getItemsNum();

  }

  cartCounting() {
      let cartNum:any = document.querySelector('.cartCounter')
      let itemNum:any = localStorage.getItem('All Cart' || "");
      cartNum.innerText = JSON.parse(itemNum).length;
  }

  getItemsNum(){
    let itemNum:any = localStorage.getItem('All Cart' || "");
    if(itemNum === null){
      return 0;
    } else {
      return JSON.parse(itemNum).length
    }
  }

  noRepeat(cartItems:cartItem[], newCartItems:cartItem){
    let newArray:any = [];
    let newAllItems = cartItems.length >=1 ? cartItems : JSON.parse(localStorage.getItem('All Cart') || "")
    let removeDuplicates:any = []
    newAllItems.push(newCartItems)
    newAllItems.forEach((item:any) => {
      if(!newArray.includes(JSON.stringify(item))){
        newArray.push(JSON.stringify(item))
      }
    })

    cartItems = newArray.map((t :string) => JSON.parse(t).name === newCartItems.name ? newCartItems : JSON.parse(t))
    removeDuplicates = cartItems.filter((a, b, c) => {
        return c.findIndex(t => t.name === a.name) === b
    })
    localStorage.setItem('All Cart', JSON.stringify(removeDuplicates))

  }


  
  constructor() {
    
   }
}
