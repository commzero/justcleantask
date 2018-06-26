import { Component, OnInit, ViewChild } from '@angular/core';
import { JustCleanServiceService } from './../services/just-clean-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { CartComponent } from './cart/cart.component';
export interface Products {
  id?: number,
  name?: string,
  imageUrl?: string,
  service1?: string,
  service2?: string,
  service3?: string,
  added?: boolean
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(
    private getItemsService: JustCleanServiceService,
    private spinner: NgxSpinnerService
  ) { }
  Products: Products[] = [];
  title = 'Just Clean';
  items: any = {};
  increment: number = 0;
  total: number = 0;
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.spinner.show()
    this.getItemsService.getItems().subscribe(
      res => {
        console.log(res)
        if (res) {
          this.items = res;
          this.spinner.hide();
        }
      }
    )
  }
  addProduct(item: Products) {
    this.increment++;
    this.Products.push(item);
    let sum = 0;
    this.items.added = true;
    this.Products.forEach(function (item) {
      sum += Number(item.service3);
      return sum;
    })
    this.total = sum;
    console.log(this.Products);
  }
  removeProduct(id: number) {
    this.increment--;
    this.items.added = false;
    let sub = 0;
    this.Products = this.Products.filter((item) => item.id !== id);
    this.Products.forEach(function (item) {
      sub -= Number(item.service3);
      return sub;
    })
    this.total = sub;
    console.log(this.Products);
  }
}