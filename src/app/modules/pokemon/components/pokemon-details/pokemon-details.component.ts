import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'angprj-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon$: any;
  @Output() hideDetails = new EventEmitter();

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
