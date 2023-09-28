import { Component, EventEmitter, Input, Output } from '@angular/core';
import Pokemon from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input() pokemonList?:Pokemon[];
  // @Input() pokemonIndex?:number
  @Output() pokemonSelected:EventEmitter<number> = new EventEmitter();

  constructor(){}

  selectPokemon(index:number){
    console.log('index',index );
    
    this.pokemonSelected.emit(index);
  }
}
