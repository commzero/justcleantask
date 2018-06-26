import { Component, OnInit } from '@angular/core';
import { JustCleanServiceService } from './services/just-clean-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private getItemsService: JustCleanServiceService,
  ) { }
  title = 'Just Clean';
  id: number;
  name:string;
  imageUrl: string;
  items:any = {};
  objects: [1,2,3,4,5];
  increment: number = 1;
  decrement: number = 1;  
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.getItemsService.getItems().subscribe(
      res => {
        console.log(res)
        if (res) {
          this.items = res;
        }
      }
    )
  }
  addToCart() {
    this.increment++;
    console.log(this.increment);
  }
  removeFromCart() {
    this.increment--;
    if(this.increment == -1) {
      this.increment++;
    }
  }

}
