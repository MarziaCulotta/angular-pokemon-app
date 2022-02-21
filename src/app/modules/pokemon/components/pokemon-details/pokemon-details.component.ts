import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'angprj-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {


  id!:number;
  pokemon$!: IPokemonResponse;

  constructor(private readonly pokemonIdService: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.id = params.id);
    }

  ngOnInit(): void {
    this.getRamdomIdPokemon();
  }

  getRamdomIdPokemon() {
    this.pokemonIdService.getPokemonById(this.id).subscribe( response => {this.pokemon$ = response;console.log('pokemon id response', response)});
  }

}
