import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { ConectaComponent } from './components/conecta/conecta.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: DropdownListComponent },
  { path: 'offers', component: ProductRowComponent },
  { path: 'conecta', component: ConectaComponent },
  { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
