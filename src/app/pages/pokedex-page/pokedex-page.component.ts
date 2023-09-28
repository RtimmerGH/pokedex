import { Component } from '@angular/core';
import Pokemon from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  pokemonList?:Pokemon[];
  selectedPokemon?:Pokemon;

  constructor(private pokedexService: PokedexService){}

  ngOnInit(){
    this.pokedexService.getPokemonList().subscribe(pokeList => {
      if (pokeList) {
        this.pokemonList = pokeList;
      }
    })
  }

  showDetail(event:number){
    if (this.pokemonList) {
      this.selectedPokemon = this.pokemonList[event];
      console.log('this.selectedPokemon', this.selectedPokemon);
      
    }
  }
}
