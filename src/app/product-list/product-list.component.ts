import { Component, OnInit } from '@angular/core';
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
    discount: true,
  },
  {
    name: "Kojiro Hyuga: Tiger Shot",
    type: "Figura de Colección",
    price: 12000,
    stock: 0,
    image: 'assets/img/tigershot.jpg',
    discount: false, 
  }
];
  constructor() { }

  ngOnInit(): void {
  }

}
