import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { EachProductComponent } from './each-product/each-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },

  {
    path:'headphones',
    component:HeadphonesComponent
  },
  {
    path: 'speakers',
    component:SpeakersComponent
  },

  {
    path:'earphones',
    component:EarphonesComponent
  },

  {
    path: 'headphones/:productName',
    component: EachProductComponent
  },

  {
    path: 'speakers/:productName',
    component: EachProductComponent
  },

  {
    path: 'earphones/:productName',
    component: EachProductComponent
  },

  {
    path: 'cart',
    component: AddToCartComponent
  },

  {
    path: 'checkout',
    component: CheckoutComponent
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
