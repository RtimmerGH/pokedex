import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import Pokemon from 'src/app/shared/models/pokemon.model';
import { PokedexService } from 'src/app/shared/services/pokedex.service';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent {
  pokemonForm = this.fb.group({
    name: ['', Validators.required],
    url: ['', Validators.required],
    description: ['', Validators.required]
  });
  newPokemon: Pokemon = this.pokemonForm.value as Pokemon;
  pokemonChange?: Subscription;

  constructor(
    public fb: FormBuilder,
    public pokedexService: PokedexService
    ){}

  ngOnInit(){
    this.pokemonChange = this.pokemonForm.valueChanges
    .subscribe(value => {
      this.newPokemon = value as Pokemon;      
    });    
  }

  ngOnDestroy(){
    this.pokemonChange?.unsubscribe();    
  }

  onSubmit(){
    console.log('test');
    
    this.pokedexService.postPokemon(this.newPokemon)
    .subscribe(pokemon => {alert(`${pokemon.name} a bien été ajouté à la liste des Pokemons`)});
  }

}
