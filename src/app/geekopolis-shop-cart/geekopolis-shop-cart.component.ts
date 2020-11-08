import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-geekopolis-shop-cart',
  templateUrl: './geekopolis-shop-cart.component.html',
  styleUrls: ['./geekopolis-shop-cart.component.scss']
})
export class GeekopolisShopCartComponent implements OnInit {

  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

}
