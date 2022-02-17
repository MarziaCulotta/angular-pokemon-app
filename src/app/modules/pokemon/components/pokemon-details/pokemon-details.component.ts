import { Component, Input, OnInit } from '@angular/core';
import { IPokemonResponse } from 'src/app/shared/models/interface-models';


@Component({
  selector: 'angprj-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() pokemon!: IPokemonResponse;

  constructor() { }

  ngOnInit(): void {
  }

}
