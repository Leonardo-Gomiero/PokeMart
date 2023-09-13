import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PokeMart2';
}
export class LojaComponent {
  // Dados da droplist
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItem: string = '';
}

@NgModule({
  imports: [
    // ...outros módulos
    FormsModule // Importe FormsModule aqui
  ],
  declarations: [
    // ...componentes
  ],
  bootstrap: [
    // ...componente raiz
  ]
})
export class AppModule { }