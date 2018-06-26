import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { CartComponent } from './list/cart/cart.component';
import { NavbarComponent } from './list/navbar/navbar.component';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    NgxSpinnerModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
