import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'angprj-cattura',
  templateUrl: './cattura.component.html',
  styleUrls: ['./cattura.component.scss']
})
export class CatturaComponent implements OnInit {

  @Input() catchChoice: any[] = [];

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
