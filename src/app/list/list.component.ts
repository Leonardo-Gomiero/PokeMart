import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  itens = ['Frango a parmegiana', 'Contra filé', 'Milanesa', 'Bife à cavalo'];

  valueItem = '';

  @ViewChild('newItem') comida: any;


  addNewItem() {
    if (this.valueItem === '') alert('valor inválido');
    else this.itens.push(this.valueItem);
    this.valueItem = '';
  }

  remove() {
    this.valueItem = '';
  }

  removeItens() {
    while (this.itens.length > 0) {
      this.itens.pop();
    }
  }
  
}