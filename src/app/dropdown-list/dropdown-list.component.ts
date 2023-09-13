import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent {
  selectedOption: string = '';
  descriptions: { [key: string]: string } = {
    PokéBall: 'A clássica e confiável PokéBall para capturar Pokémon.',
    GreatBall: 'Uma opção mais eficaz para pegar Pokémon.',
    UltraBall: 'A melhor escolha para capturar Pokémon desafiadores.'
  };
  images: { [key: string]: string } = {
    PokéBall: '../assets/images/PokeBall.png',
    GreatBall: '../assets/images/GreatBall.png',
    UltraBall: '../assets/images/UltraBall.png'
  };
}