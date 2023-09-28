import { Injectable } from '@angular/core';
import Pokemon from '../models/pokemon.model';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokemonList?:Pokemon[]

  constructor(public http:HttpClient) { }

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('http://localhost:3000/pokemon');
  }

  postPokemon(newPokemon:Pokemon): Observable<Pokemon>{
    return this.http.post<Pokemon>('http://localhost:3000/pokemon',newPokemon, {headers:{'Content-Type': 'application/json'}})
  }

  getPokemonSelected(pokemon: number): Pokemon | null {
    if (this.pokemonList){
      return this.pokemonList[pokemon];
    }
    return null;
  }

}
