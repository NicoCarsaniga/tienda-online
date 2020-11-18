import { Component, OnInit } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product [] = [
  {
    name: "One Piece - Romance Down",
    type: "Manga",
    price: 250,
    stock: 6,
    image: 'assets/img/onepiecetomo1.jpg',
    quantity: 0,
  },
  {
    name: "Kojiro Hyuga: Tiger Shot",
    type: "Figura de Colección",
    price: 12000,
    stock: 0,
    image: 'assets/img/tigershot.jpg',
    quantity: 0,
  },
  {
    name: "Collección Funko Pop! El Padrino",
    type: "Figura de Colección",
    price: 10000,
    stock: 1,
    image: 'assets/img/coleccionElPadrinoFunkPop.jpg',
    quantity: 0,
  },
];
  
  constructor(private cart: ProductCartService) { }

  ngOnInit(): void {
  }

  addToCart(product): void {
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }

  msgAlert(m: string){
    alert(m);
  }
}
