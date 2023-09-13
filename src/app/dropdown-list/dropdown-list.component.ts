import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent {
  selectedOption: string = '';
  descriptions: { [key: string]: string } = {
    opcao1: 'Descrição da Opção 1',
    opcao2: 'Descrição da Opção 2',
    opcao3: 'Descrição da Opção 3'
  };
  images: { [key: string]: string } = {
    opcao1: '../assets/images/PokeBall.png',
    opcao2: '../assets/images/GreatBall.png',
    opcao3: '../assets/images/UltraBall.png'
  };
}
