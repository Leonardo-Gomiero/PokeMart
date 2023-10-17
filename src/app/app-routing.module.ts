import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';

const routes: Routes = [
  { path: '', component: DropdownListComponent },
  { path: 'offers', component: ProductRowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
