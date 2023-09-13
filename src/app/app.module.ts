import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductRowComponent,
    ListComponent,
    AppComponent,
    DropdownListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
