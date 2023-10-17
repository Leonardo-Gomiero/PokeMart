import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ProductRowComponent,
    ListComponent,
    AppComponent,
    DropdownListComponent,
    NavMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
