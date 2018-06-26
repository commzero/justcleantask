import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../list.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  @Input() increment: number;
  constructor() { }

  ngOnInit() {
  }

}
