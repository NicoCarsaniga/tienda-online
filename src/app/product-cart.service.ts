import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  
  private _shopCart: Product[] = [];
  shopCart: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  
  constructor() { }
  
  addToCart(product: Product) {
    let item = this._shopCart.find((v1) => v1.name == product.name);
    if(!item){
      this._shopCart.push({...product});
    }else {
      item.quantity += product.quantity;
      item.price += product.price;
    }
    this.shopCart.next(this._shopCart);
  }
}