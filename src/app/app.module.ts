import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { CategoryComponent } from './components/category/category.component';
import { TextContentComponent } from './components/text-content/text-content.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { MiniDisplayComponent } from './components/mini-display/mini-display.component';
import { MiniEarphoneComponent } from './components/mini-earphone/mini-earphone.component';
import { FooterShowcaseComponent } from './components/footer-showcase/footer-showcase.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { ProductsDisplayComponent } from './components/products-display/products-display.component';
import { EachProductComponent } from './each-product/each-product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FeaturesComponent } from './components/features/features.component';
import { FeatureImagesComponent } from './components/feature-images/feature-images.component';
import { CartCounterComponent } from './components/cart-counter/cart-counter.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InputComponent } from './components/input/input.component';
import { PaymentInputComponent } from './components/payment-input/payment-input.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    CategoryComponent,
    TextContentComponent,
    ShowCaseComponent,
    MiniDisplayComponent,
    MiniEarphoneComponent,
    FooterShowcaseComponent,
    FooterComponent,
    HomeComponent,
    HeadphonesComponent,
    SpeakersComponent,
    EarphonesComponent,
    ProductsDisplayComponent,
    EachProductComponent,
    AddToCartComponent,
    FeaturesComponent,
    FeatureImagesComponent,
    CartCounterComponent,
    CheckoutComponent,
    InputComponent,
    PaymentInputComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
