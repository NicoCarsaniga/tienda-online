import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';
import { ProductCartService } from '../product-cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-geekopolis-shop-cart',
  templateUrl: './geekopolis-shop-cart.component.html',
  styleUrls: ['./geekopolis-shop-cart.component.scss']
})
export class GeekopolisShopCartComponent implements OnInit {

  cartList: Product[];
  constructor(private cart: ProductCartService) { 
    cart.shopCart.subscribe((observable) => this.cartList = observable);
    
  }

  ngOnInit(): void {
  }

}
