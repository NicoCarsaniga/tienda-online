import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-input-value',
  templateUrl: './input-value.component.html',
  styleUrls: ['./input-value.component.scss']
})
export class InputValueComponent implements OnInit {

  constructor() { }

  @Input()
  value: number;

  @Input()
  max: number;

  @Output()
  outputValue: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxValue: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.value < this.max){
      this.value++;
      this.outputValue.emit(this.value);
    }
    else{
      this.maxValue.emit("No hay suficiente stock del producto solicitado");
    }
  }

  downQuantity(): void{
    if(this.value > 0){
      this.value--;
      this.outputValue.emit(this.value);
    }
  }

}
