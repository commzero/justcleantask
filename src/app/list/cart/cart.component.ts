import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../list.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id: number;
  @Input() product: Products;
  @Input() total: number;
  constructor() { }

  ngOnInit() {
  }

}
