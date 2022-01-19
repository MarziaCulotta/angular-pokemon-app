import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'angprj-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit {

  @Input() catchChoice: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
