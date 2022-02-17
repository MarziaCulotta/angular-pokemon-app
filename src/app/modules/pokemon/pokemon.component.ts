import { Component, OnInit } from '@angular/core';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'angprj-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$!: any;
  catchChoice: string[] = [];
  refuseChoice: string[] = [];

  selectedPokemon!: IPokemonResponse;
  detailIsVisible =  false;

  constructor( private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    this.pokemonService.getPokemon().subscribe( response => {this.pokemon$ = response; console.log(response)})
  }

  catch() {
    this.catchChoice.push(this.pokemon$);
    this.getRandomPokemon();
  }

  notCatch() {
    this.refuseChoice.push(this.pokemon$);
    this.getRandomPokemon();
  }

  showPokemonDetails(pokemon:any) {
    console.log(pokemon,"show");
    this.selectedPokemon = pokemon;
    this.detailIsVisible = true;
  }


  // hidePokemon(): void {
  //   this.catchChoice = []
  // }

}



