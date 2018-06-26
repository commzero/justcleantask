

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './list/cart/cart.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: '**', pathMatch: 'full', redirectTo: '/home' },
    { path: '/home', component: AppComponent },
    {
        path: '/list', component: ListComponent, children: [
            { path: '/cart', component: CartComponent },
        ]
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
