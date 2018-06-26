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
  ngOnInit() {
  }
}
