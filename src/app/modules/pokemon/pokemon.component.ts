import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'angprj-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemon$!: IPokemonResponse;
  catchChoice: IPokemonResponse[] = [];
  refuseChoice: IPokemonResponse[] = [];

  selectedPokemon!: IPokemonResponse;
  detailIsVisible =  false;

  constructor( private readonly pokemonService: PokemonService, private readonly router: Router) { }

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

  showPokemonDetails(pokemon: IPokemonResponse) {
    this.selectedPokemon = pokemon;
    this.detailIsVisible = true;
  }

  deleteRefusedPokemon(id: number) {
    this.refuseChoice = this.refuseChoice.filter(p => p.id !== id)
  }

  deleteCatchedPokemon(id: number) {
    this.catchChoice = this.catchChoice.filter(p => p.id !== id)
  }

  close(status:boolean) {
    this.detailIsVisible = status
  }

}

