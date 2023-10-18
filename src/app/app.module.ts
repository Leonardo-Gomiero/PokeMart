import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConectaComponent } from './components/conecta/conecta.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductRowComponent,
    ListComponent,
    ItemOutputComponent,
    AppComponent,
    DropdownListComponent,
    NavMenuComponent,
    ConectaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
