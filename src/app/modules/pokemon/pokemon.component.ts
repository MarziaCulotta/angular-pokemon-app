import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  detailIsVisible =  false;
  selectedPokemon!: IPokemonResponse;

  constructor( private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getRandomPokemon();
  }

  getRandomPokemon() {
    this.pokemonService.getPokemon().subscribe( result => {this.pokemon$ = result; console.log(result)})
  }

  catch() {
    this.catchChoice.push(this.pokemon$);
    this.getRandomPokemon();

    // this.detailIsVisible = true;
  }

  notCatch() {
    this.refuseChoice.push(this.pokemon$);
    this.getRandomPokemon();
  }

  hidePokemon(): void {
    this.catchChoice = []
  }

  showPokemonDetails(pokemon:any) {
    console.log(pokemon,"show");
    this.selectedPokemon = pokemon;
    this.detailIsVisible = true;
  }

}



