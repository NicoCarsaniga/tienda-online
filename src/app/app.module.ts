import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import { FormsModule } from '@angular/forms';
import { GeekopolisContactComponent } from './geekopolis-contact/geekopolis-contact.component';
import { GeekopolisShopCartComponent } from './geekopolis-shop-cart/geekopolis-shop-cart.component';
import { GeekopolisHomeComponent } from './geekopolis-home/geekopolis-home.component';
import { GeekopolisAboutComponent } from './geekopolis-about/geekopolis-about.component';
import { InputValueComponent } from './input-value/input-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    GeekopolisContactComponent,
    GeekopolisShopCartComponent,
    GeekopolisHomeComponent,
    GeekopolisAboutComponent,
    InputValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
